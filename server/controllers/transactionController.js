import { store } from "../data/store.js";

export const getTransactions = (req, res) => {
  res.json({
    success: true,
    data: store.transactions
  });
};