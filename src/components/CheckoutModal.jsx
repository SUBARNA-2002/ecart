// CheckoutModal.js
import React from "react";

const CheckoutModal = ({ onClose, onConfirm }) => {
  return (
    <div className="modal">
      {/* Your address form and payment mode components go here */}
      <h2>Address Form</h2>
      {/* Add your address form inputs here */}

      <h2>Payment Mode</h2>
      {/* Add your payment mode inputs here */}

      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default CheckoutModal;
