import { store } from "../data/store.js";

const formatDate = () =>
  new Date().toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short"
  });

const normalizeCurrency = (value = "USD") => {
  const upper = String(value).trim().toUpperCase();
  if (upper === "RS") return "INR";
  return upper || "USD";
};

export const depositToWallet = (req, res) => {
  const {
    amount,
    currency = "USD",
    title = "Added to Wallet"
  } = req.body;

  if (!amount || Number(amount) <= 0) {
    return res.status(400).json({
      success: false,
      message: "Amount must be greater than 0"
    });
  }

  const depositAmount = Number(amount);
  store.wallet.totalBalance += depositAmount;

  store.transactions.unshift({
    id: Date.now(),
    type: "deposit",
    title,
    amount: depositAmount,
    currency: normalizeCurrency(currency),
    date: formatDate(),
    status: "Success"
  });

  store.wallet.chartData.push({
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    }),
    amount: Math.floor(Math.random() * 25) + 5
  });

  if (store.wallet.chartData.length > 12) {
    store.wallet.chartData.shift();
  }

  return res.json({
    success: true,
    message: "Deposit successful",
    data: {
      totalBalance: store.wallet.totalBalance,
      transactions: store.transactions
    }
  });
};

export const withdrawFromWallet = (req, res) => {
  const {
    amount,
    currency = "USD",
    title = "Withdrawn"
  } = req.body;

  if (!amount || Number(amount) <= 0) {
    return res.status(400).json({
      success: false,
      message: "Amount must be greater than 0"
    });
  }

  const withdrawAmount = Number(amount);

  if (withdrawAmount > store.wallet.totalBalance) {
    return res.status(400).json({
      success: false,
      message: "Insufficient balance"
    });
  }

  store.wallet.totalBalance -= withdrawAmount;

  store.transactions.unshift({
    id: Date.now(),
    type: "withdraw",
    title,
    amount: withdrawAmount,
    currency: normalizeCurrency(currency),
    date: formatDate(),
    status: "Success"
  });

  store.wallet.chartData.push({
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    }),
    amount: Math.floor(Math.random() * 25) + 5
  });

  if (store.wallet.chartData.length > 12) {
    store.wallet.chartData.shift();
  }

  return res.json({
    success: true,
    message: "Withdrawal successful",
    data: {
      totalBalance: store.wallet.totalBalance,
      transactions: store.transactions
    }
  });
};