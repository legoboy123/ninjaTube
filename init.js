import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";


const PORT = process.env.PORT || 4000;

const handleListening = () => 
console.log(`🏮-- 그림자의 세계가 열렸다...http://localhost:${PORT} --🏮`);


app.listen(PORT, handleListening);