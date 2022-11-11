import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const server = express();
server.use(cors());
server.use(express.json());
dotenv.config();

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));