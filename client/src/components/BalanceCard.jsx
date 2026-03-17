function BalanceCard({ wallet }) {
  return (
    <div className="card balance-card">
      <h3>Total Balance</h3>
      <h1>${wallet.totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
      <p>+{wallet.changePercent}% from last month</p>
    </div>
  );
}

export default BalanceCard;