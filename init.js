import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`๐ฎ-- ๊ทธ๋ฆผ์์ ์ธ๊ณ๊ฐ ์ด๋ ธ๋ค...http://localhost:${PORT} --๐ฎ`);

app.listen(PORT, handleListening);
