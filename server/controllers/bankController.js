import { store } from "../data/store.js";

export const addBankAccount = (req, res) => {
  const { bankName, balance, note } = req.body;

  if (!bankName || !balance) {
    return res.status(400).json({
      success: false,
      message: "Bank name and balance are required"
    });
  }

  const newBank = {
    id: Date.now(),
    bankName,
    balance: Number(balance),
    note: note || "+0 since last hour"
  };

  store.bankAccounts.push(newBank);

  return res.status(201).json({
    success: true,
    message: "Bank account added successfully",
    data: newBank
  });
};