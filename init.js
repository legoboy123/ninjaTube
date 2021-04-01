import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`🏮-- 그림자의 세계가 열렸다...http://localhost:${PORT} --🏮`);

app.listen(PORT, handleListening);
