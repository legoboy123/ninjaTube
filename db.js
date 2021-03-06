import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("đŽ-- ěë°í ě ëł´ë§ęłź ě°ę˛°ëěë¤... --đŽ");
const handleError = (error) =>
  console.log(`â-- ěë°í ě ëł´ë§ě ëŹ¸ě ę° ë°ěíë¤..!!:${error} --â`);

db.once("open", handleOpen);
db.on("error", handleError);
