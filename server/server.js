import express from "express";
import cors from "cors";

import dashboardRoutes from "./routes/dashboardRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";
import bankRoutes from "./routes/bankRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Wallet Dashboard API is running");
});

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/banks", bankRoutes);
app.use("/api/transactions", transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});