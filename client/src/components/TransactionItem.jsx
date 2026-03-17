function TransactionItem({ item }) {
  return (
    <div className="transaction-item">
      <div>
        <p className="transaction-title">{item.title}</p>
        <h4>
          {item.type === "withdraw" ? "-" : "+"}
          {item.amount.toLocaleString()} {item.currency}
        </h4>
        <span className="transaction-date">{item.date}</span>
      </div>

      <span className={`status ${item.status.toLowerCase()}`}>
        {item.status}
      </span>
    </div>
  );
}

export default TransactionItem;