import axios from "axios";

const api = axios.create({
  baseURL: "https://wallet-backend.onrender.com/api"
});

export const fetchDashboard = () => api.get("/dashboard");
export const depositWallet = (payload) => api.post("/wallet/deposit", payload);
export const withdrawWallet = (payload) => api.post("/wallet/withdraw", payload);
export const addBankAccount = (payload) => api.post("/banks", payload);
export const fetchTransactions = () => api.get("/transactions");

export default api;
