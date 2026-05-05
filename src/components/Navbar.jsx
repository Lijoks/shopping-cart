import React from 'react';

const Navbar = ({ cartItemCount, onCartClick, showCart, onBackToShop }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          {showCart ? (
            <button className="btn btn-back" onClick={onBackToShop}>
              ← Back to Shop
            </button>
          ) : (
            <h1>TechStore</h1>
          )}
        </div>
        
        <button className="cart-icon-wrapper" onClick={onCartClick}>
          <span className="cart-icon">🛒</span>
          {cartItemCount > 0 && (
            <span className="cart-badge">{cartItemCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;