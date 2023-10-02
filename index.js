require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const DBconnection = require("./config/DB");
const roleRoutes = require("./routes/role");
const communityRoutes = require("./routes/community");
const memberRoutes = require("./routes/member");
DBconnection();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`𝒎𝒊𝒔𝒔𝒊𝒐𝒏 𝒊𝒎𝒑𝒐𝒔𝒔𝒊𝒃𝒍𝒆 𝒕𝒉𝒆𝒎𝒆 𝒔𝒕𝒂𝒓𝒕𝒔 𝒑𝒍𝒂𝒚𝒊𝒏𝒈:)`);
});

app.use("/v1/auth", authRoutes);
app.use("/v1/role", roleRoutes);
app.use("/v1/community", communityRoutes);
app.use("/v1/member", memberRoutes);


app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running http://localhost:", process.env.PORT);
  });
  