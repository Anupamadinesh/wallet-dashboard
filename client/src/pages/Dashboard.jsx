import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BalanceCard from "../components/BalanceCard";
import ActionButtons from "../components/ActionButtons";
import SummaryCard from "../components/SummaryCard";
import SectionHeader from "../components/SectionHeader";
import AccountCard from "../components/AccountCard";
import ChartCard from "../components/ChartCard";
import TransactionList from "../components/TransactionList";
import Modal from "../components/Modal";

import {
  fetchDashboard,
  depositWallet,
  withdrawWallet,
  addBankAccount,
  fetchTransactions   // ✅ ADDED
} from "../services/api";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [transactions, setTransactions] = useState([]); // ✅ ADDED
  const [loading, setLoading] = useState(true);

  const [modalState, setModalState] = useState({
    deposit: false,
    withdraw: false,
    bank: false
  });

  // ✅ Load dashboard
  const loadDashboard = async () => {
    try {
      const response = await fetchDashboard();
      console.log("API RESPONSE:", response.data);
      setDashboard(response.data?.data || null);
    } catch (error) {
      console.error("Failed to load dashboard:", error);
    }
  };

  // ✅ NEW: Load transactions
  const loadTransactions = async () => {
    try {
      const response = await fetchTransactions();
      setTransactions(response.data.data);
    } catch (error) {
      console.error("Failed to load transactions:", error);
    }
  };

  // ✅ UPDATED useEffect
  useEffect(() => {
    const loadAll = async () => {
      setLoading(true);
      await loadDashboard();
      await loadTransactions();
      setLoading(false);
    };

    loadAll();
  }, []);

  const openModal = (type) => {
    setModalState((prev) => ({ ...prev, [type]: true }));
  };

  const closeModal = (type) => {
    setModalState((prev) => ({ ...prev, [type]: false }));
  };

  // ✅ UPDATED (important)
  const handleDeposit = async (data) => {
    try {
      await depositWallet(data);
      closeModal("deposit");
      await loadDashboard();
      await loadTransactions(); // ✅ ADDED
    } catch (error) {
      alert(error?.response?.data?.message || "Deposit failed");
    }
  };

  // ✅ UPDATED (important)
  const handleWithdraw = async (data) => {
    try {
      await withdrawWallet(data);
      closeModal("withdraw");
      await loadDashboard();
      await loadTransactions(); // ✅ ADDED
    } catch (error) {
      alert(error?.response?.data?.message || "Withdrawal failed");
    }
  };

  const handleAddBank = async (data) => {
    try {
      await addBankAccount(data);
      closeModal("bank");
      await loadDashboard();
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to add bank account");
    }
  };

  if (loading) return <div className="page-loader">Loading dashboard...</div>;
  if (!dashboard) return <div className="page-loader">No data found</div>;

  return (
    <div className="page">
      <div className="dashboard-shell">
        <Navbar />

        <div className="dashboard-grid">
          <div className="left-column">
            <BalanceCard wallet={dashboard.wallet} />

            <ActionButtons
              onDeposit={() => openModal("deposit")}
              onWithdraw={() => openModal("withdraw")}
              onAddBank={() => openModal("bank")}
            />

            <div className="summary-grid">
              {dashboard.summaryCards.map((item) => (
                <SummaryCard key={item.id} item={item} />
              ))}
            </div>

            <div className="section-block">
              <SectionHeader title="Associated Bank Accounts" />
              <div className="accounts-grid">
                {dashboard.bankAccounts.map((item, index) => (
                  <AccountCard
                    key={item.id}
                    title={item.bankName}
                    balance={item.balance}
                    note={item.note}
                    active={index === 1}
                  />
                ))}
              </div>
            </div>

            <div className="section-block">
              <SectionHeader title="Wallet Accounts" />
              <div className="accounts-grid">
                {dashboard.walletAccounts.map((item) => (
                  <AccountCard
                    key={item.id}
                    title={item.walletName}
                    balance={item.balance}
                    note={item.note}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="right-column">
            <ChartCard data={dashboard.wallet.chartData} />

            {/* ✅ FIXED: now using API transactions */}
            <TransactionList transactions={transactions} />
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalState.deposit}
        onClose={() => closeModal("deposit")}
        title="Add to Wallet"
        type="deposit"
        onSubmit={handleDeposit}
      />

      <Modal
        isOpen={modalState.withdraw}
        onClose={() => closeModal("withdraw")}
        title="Withdraw Amount"
        type="withdraw"
        onSubmit={handleWithdraw}
      />

      <Modal
        isOpen={modalState.bank}
        onClose={() => closeModal("bank")}
        title="Add New Bank Account"
        type="bank"
        onSubmit={handleAddBank}
      />
    </div>
  );
}

export default Dashboard;