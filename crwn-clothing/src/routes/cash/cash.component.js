
import React, { useState } from 'react';
import PaymentMethod from '../../component/paymentmethod/paymentmethod.component';

const Cash = () => {
  const [payment, setPayment] = useState('');

  const placeOrder = () => {
    if (payment === 'cod') {
      alert('Order placed with Cash on Delivery!');
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <PaymentMethod setPayment={setPayment} />
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Cash;
