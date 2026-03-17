function AccountCard({ title, balance, note, active = false }) {
  return (
    <div className={`card account-card ${active ? "active-card" : ""}`}>
      <span className="small-label">{title}</span>
      <h4>{balance.toLocaleString()}</h4>
      <p>{note}</p>
    </div>
  );
}

export default AccountCard;