import { useState, useEffect } from 'react';
import { products as productList } from './data/products';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import CartTotal from './components/CartTotal';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart:', error);
        setCartItems([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, amount: 1 }];
      }
    });
  };

  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Remove a specific item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Increase quantity
  const increaseAmount = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseAmount = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      )
    );
  };

  // Calculate total items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.amount, 0);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  // Check if product is in cart
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div className="app">
      <Navbar 
        cartItemCount={totalItems} 
        onCartClick={() => setShowCart(!showCart)}
        showCart={showCart}
        onBackToShop={() => setShowCart(false)}
      />

      <main className="app-main">
        {!showCart ? (
          // Products Page
          <>
            <div className="shop-header">
              <h2>Our Products</h2>
              <p>Discover our latest tech collection</p>
            </div>
            <div className="products-grid">
              {productList.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  isInCart={isInCart(product.id)}
                  formatPrice={formatPrice}
                />
              ))}
            </div>
          </>
        ) : (
          // Cart Page
          <>
            <div className="cart-header">
              <h2>Your Bag</h2>
              {cartItems.length > 0 && (
                <button className="btn btn-clear" onClick={clearCart}>
                  Clear Cart
                </button>
              )}
            </div>

            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-cart-icon">🛒</div>
                <h2>Your cart is empty</h2>
                <p>Add some products to get started!</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onIncrease={increaseAmount}
                      onDecrease={decreaseAmount}
                      onRemove={removeItem}
                      formatPrice={formatPrice}
                    />
                  ))}
                </div>
                <CartTotal
                  total={totalPrice}
                  formatPrice={formatPrice}
                />
              </>
            )}
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>E-commerce Cart Management System © 2026</p>
      </footer>
    </div>
  );
}

export default App;