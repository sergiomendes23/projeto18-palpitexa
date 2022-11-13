import { Router } from "express";

import { createUser } from "../controllers/userController.js";
import { validateUser } from "../middlewares/validateUser.js"

const router = Router();

router.post("/register", validateUser, createUser);

export default router;