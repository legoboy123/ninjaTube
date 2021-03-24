import app from "./app";

const PORT = 4000;

const handleListening = () => 
console.log(`🏮--그림자의 세계가 열렸다...http://localhost:${PORT}--🏮`);


app.listen(PORT, handleListening);