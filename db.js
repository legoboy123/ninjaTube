import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("🏮-- 은밀한 정보망과 연결되었다... --🏮");
const handleError = (error) =>
  console.log(`❌-- 은밀한 정보망에 문제가 발생했다..!!:${error} --❌`);

db.once("open", handleOpen);
db.on("error", handleError);
