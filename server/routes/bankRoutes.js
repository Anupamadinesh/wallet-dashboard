import express from "express";
import { addBankAccount } from "../controllers/bankController.js";

const router = express.Router();

router.post("/", addBankAccount);

export default router;