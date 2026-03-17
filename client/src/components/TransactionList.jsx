import TransactionItem from "./TransactionItem";

function TransactionList({ transactions }) {
  return (
    <div className="card transaction-card">
      <div className="section-header">
        <h3>Transaction History</h3>
        <span>•••</span>
      </div>

      <div className="transaction-list">
        {transactions.map((item) => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TransactionList;