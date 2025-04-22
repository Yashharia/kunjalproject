

import { useContext } from "react";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.style";

import PaymentForm from "../../component/payment-form/payment-form.component";
import PaymentMethod from "../../component/paymentmethod/paymentmethod.component";
import Cash from "../cash/cash.component";

const Checkout = () => {
 
  const {cartItems, cartTotal} = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <Cash />
<PaymentForm/>
    </CheckoutContainer>
  );
};

export default Checkout;