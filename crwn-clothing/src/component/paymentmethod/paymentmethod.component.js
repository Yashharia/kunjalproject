// PaymentMethod.js
import React, { useState } from 'react';

const PaymentMethod = ({ setPayment }) => {
  return (
    <div>
      <h3>Select Payment Method:</h3>
      <label>
        <input
          type="radio"
          value="cod"
          name="payment"
          onChange={(e) => setPayment(e.target.value)}
        />
        Cash on Delivery (COD)
      </label>
    </div>
  );
};

export default PaymentMethod;
