import express from "express";

const server = express();
server.use(express.json());


const PORT = 4000;
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));