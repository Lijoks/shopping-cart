import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease, onRemove, formatPrice }) => {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="item-details">
        <div className="item-info">
          <h3 className="item-title">{item.title}</h3>
          {item.category && (
            <span className="item-category">{item.category}</span>
          )}
          <p className="item-price">{formatPrice(item.price)}</p>
        </div>
        <div className="item-controls">
          <div className="quantity-controls">
            <button
              className="btn btn-quantity"
              onClick={() => onDecrease(item.id)}
              disabled={item.amount <= 1}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="quantity-display">{item.amount}</span>
            <button
              className="btn btn-quantity"
              onClick={() => onIncrease(item.id)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button
            className="btn btn-remove"
            onClick={() => onRemove(item.id)}
            aria-label="Remove item"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;