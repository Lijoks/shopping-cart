import React from 'react';

const CartTotal = ({ total, formatPrice }) => {
  return (
    <div className="cart-total">
      <div className="total-line">
        <span>Subtotal</span>
        <span>{formatPrice(total)}</span>
      </div>
      <div className="total-line">
        <span>Shipping</span>
        <span className="shipping-free">Free</span>
      </div>
      <div className="total-line total-final">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>
    </div>
  );
};

export default CartTotal;