const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD);
// console.log(DB);

mongoose
  // .connect("mongodb://127.0.0.1:27017/hotel")
  .connect(DB)
  .then(() => console.log("連接 mongoDb 成功!"))
  .catch((error) => {
    console.log(error);
  });
