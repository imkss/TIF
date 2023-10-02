const mongoose = require("mongoose");
const DBconnection = () => {
  mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true},)
  .then((conn) => {
      console.log(`Conneted To Mongodb Databse:: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = DBconnection;