import express from "express";
import { depositToWallet, withdrawFromWallet } from "../controllers/walletController.js";

const router = express.Router();

router.post("/deposit", depositToWallet);
router.post("/withdraw", withdrawFromWallet);

export default router;