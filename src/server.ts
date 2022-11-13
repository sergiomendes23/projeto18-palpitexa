import express from "express";

import userRouter from "../src/routers/userRouter.js";

const server = express();
server.use(express.json());

server.use(userRouter);

const PORT = 4000;
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));