# 🛒 TechStore - E-commerce Cart Management System

A modern, fully-featured e-commerce shopping cart application built with React and Vite. Users can browse products, add them to cart, adjust quantities, and see real-time price calculations with a beautiful glass-morphism UI.

![TechStore Screenshot](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)

## ✨ Features

- 🛍️ **Product Catalog** - Browse through a collection of tech products with images, names, prices, and categories
- ➕ **Add to Cart** - Easily add products to your shopping cart with visual feedback
- 🔢 **Quantity Controls** - Increase or decrease product quantities with intuitive +/− buttons
- 💰 **Real-time Total Calculation** - See subtotal and total update instantly as you modify quantities
- 🗑️ **Remove Individual Items** - Remove specific products from your cart with a single click
- 🧹 **Clear Cart** - Empty your entire cart with one "Clear Cart" button
- 💾 **Local Storage Persistence** - Cart data saved automatically across browser sessions
- 🎨 **Glass-morphism Design** - Modern frosted glass UI with beautiful gradient background
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🏷️ **Category Badges** - Products display their category (Smartphone, Laptop, Tablet, etc.)
- 🔔 **Cart Badge** - Real-time item count displayed on the cart icon

## 🛠️ Technology Stack

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **CSS3** - Modern styling with animations and glass-morphism effects
- **Local Storage API** - Browser-based data persistence
- **React Hooks** - useState and useEffect for state management
- **Intl.NumberFormat** - For currency formatting

## 📦 Installation

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/lijoks/shopping-cart.git
   cd shopping-cart

    Install dependencies
    bash

    npm install

    Start the development server
    bash

    npm run dev

    Open your browser
    text

    http://localhost:5173

🎯 Usage
Browsing Products

    Visit the homepage to see all available products

    Products display with images, names, prices, and category badges

Adding Products to Cart

    Click the "Add to Cart" button on any product

    The button changes to "✓ Added to Cart" to confirm

    Cart icon in the navbar updates with item count

Managing Your Cart

    Click the 🛒 cart icon to view your cart

    Increase quantity: Click the + button

    Decrease quantity: Click the − button (minimum: 1)

    Remove item: Click the "Remove" button

    Clear all items: Click the "Clear Cart" button

    Continue shopping: Click "← Back to Shop"

Real-time Updates

    Total price recalculates instantly with every quantity change

    Cart badge updates as items are added or removed

    All changes persist in local storage

🏗️ Project Structure
text

shopping-cart/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── CartItem.jsx       # Individual cart item with controls
│   │   ├── CartTotal.jsx      # Cart subtotal and total display
│   │   ├── Navbar.jsx         # Navigation bar with cart icon
│   │   └── ProductCard.jsx    # Product display card
│   ├── data/
│   │   └── products.js        # Product data (10 products)
│   ├── App.jsx                # Main application component
│   ├── App.css                # Application styles
│   ├── index.css              # Global styles and background
│   └── main.jsx               # Application entry point
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation

🎨 Features in Detail
Product Management

    10 diverse products across multiple categories

    Categories include: Smartphones, Laptops, Tablets, Watches, Headphones, Gaming, and Cameras

    Each product has a high-quality image, title, price, and category badge

Cart Functionality

    Add to Cart: Products can be added multiple times; quantity increases

    Quantity Adjustment: Fine-tune quantities with +/− buttons

    Remove Items: Individual items can be removed from cart

    Clear Cart: One-click solution to empty all items

    Persistent Storage: Cart data survives page refreshes and browser restarts

User Interface

    Glass-morphism Design: Semi-transparent cards with backdrop blur

    Smooth Animations: Hover effects, transitions, and pop-in animations

    Responsive Layout: Adapts to all screen sizes

    Visual Feedback: Button state changes and cart badge updates

🚢 Deployment
Deploy to Netlify

    Push your code to GitHub

    Go to Netlify

    Click "New site from Git"

    Choose your repository (lijoks/shopping-cart)

    Build command: npm run build

    Publish directory: dist

    Click "Deploy site"

Deploy to Vercel

    Push your code to GitHub

    Go to Vercel

    Import your repository

    Vercel will auto-detect Vite settings

    Click "Deploy"

Build for Production
bash

npm run build

The built files will be in the dist directory, ready for deployment.
🔧 Available Scripts

    npm run dev - Start development server

    npm run build - Build for production

    npm run preview - Preview production build locally

📱 Browser Support

    Chrome (latest)

    Firefox (latest)

    Safari (latest)

    Edge (latest)

    Opera (latest)

🤝 Contributing

Contributions are welcome! Feel free to:

    Fork the repository

    Create a feature branch (git checkout -b feature/AmazingFeature)

    Commit your changes (git commit -m 'Add some AmazingFeature')

    Push to the branch (git push origin feature/AmazingFeature)

    Open a Pull Request

📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
👏 Acknowledgments

    Background images from Unsplash

    Product inspiration from various tech brands

    React and Vite communities for excellent documentation

📧 Contact

Lijoks Adedoyin

    Email: lijoksadedoyin@gmail.com

    GitHub: @lijoks

    Project Link: https://github.com/lijoks/shopping-cart

Made with ❤️ by Lijoks
text


## Optional: Add a LICENSE file

Create a `LICENSE` file in your root folder:

MIT License

Copyright (c) 2026 Lijoks Adedoyin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
text


## Git Commands to Push to GitHub

If you haven't pushed your code yet, use these commands:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: E-commerce Cart Management System"

# Add remote repository
git remote add origin https://github.com/lijoks/shopping-cart.git

# Push to GitHub
git branch -M main
git push -u origin main
