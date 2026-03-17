import { useState, useEffect } from "react";

function Modal({ isOpen, onClose, title, type, onSubmit }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData({});
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          {(type === "deposit" || type === "withdraw") && (
            <>
              <input
                type="number"
                name="amount"
                placeholder="Enter amount"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="currency"
                placeholder="Currency (USD)"
                onChange={handleChange}
              />
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
              />
            </>
          )}

          {type === "bank" && (
            <>
              <input
                type="text"
                name="bankName"
                placeholder="Bank name"
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="balance"
                placeholder="Balance"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="note"
                placeholder="Note"
                onChange={handleChange}
              />
            </>
          )}

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;