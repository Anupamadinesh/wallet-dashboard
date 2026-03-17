import { store } from "../data/store.js";

export const getDashboardData = (req, res) => {
  res.json({
    success: true,
    data: {
      wallet: store.wallet,
      summaryCards: store.summaryCards,
      bankAccounts: store.bankAccounts,
      walletAccounts: store.walletAccounts,
      transactions: store.transactions
    }
  });
};