function ActionButtons({ onDeposit, onWithdraw, onAddBank }) {
  return (
    <div className="action-buttons">
      <button className="btn btn-primary" onClick={onDeposit}>Add to wallet</button>
      <button className="btn" onClick={onWithdraw}>Withdraw</button>
      <button className="btn" onClick={onAddBank}>Add New Account</button>
    </div>
  );
}

export default ActionButtons;