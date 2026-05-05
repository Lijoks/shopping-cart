import React from 'react';

const ProductCard = ({ product, onAddToCart, isInCart, formatPrice }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.img} alt={product.title} />
        {product.category && (
          <span className="product-category">{product.category}</span>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
        <button 
          className={`btn btn-add-cart ${isInCart ? 'in-cart' : ''}`}
          onClick={() => onAddToCart(product)}
        >
          {isInCart ? '✓ Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;