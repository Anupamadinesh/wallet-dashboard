function SummaryCard({ item }) {
  return (
    <div className="card summary-card">
      <span className="small-label">{item.title}</span>
      <h4>
        {item.amount.toLocaleString()} <span>{item.currency}</span>
      </h4>
      <p>{item.note}</p>
    </div>
  );
}

export default SummaryCard;