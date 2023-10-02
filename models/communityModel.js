const mongoose = require("mongoose");
const userModel = require("./userModel");
const Snowflake = require ("@theinternetfolks/snowflake");

const communityModel = mongoose.Schema({
  // _id: {
  //   type: String,
  //   default: Snowflake.generate,
  // },
  name:{
    type:String,
    max:128,
  },
  slug:{
    type:String,
    slug:"name",
    maxLength:255,
    unique:true,
  },
  owner:{    
    type: mongoose.Schema.Types.ObjectId,
    ref:userModel
  },
}, { timestamps: true }
)

communityModel.pre("save", function(next) {
  this.slug = this.name.replace(/[-\s]/g, "").toLowerCase();
  next();
})
module.exports = mongoose.model("community", communityModel);
