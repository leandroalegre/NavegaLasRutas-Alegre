import './App.css';
import { Navbar } from "./components/layouts/navbar/Navbar";
import { Footer } from './components/layouts/footer/Footer';
import { ProductList } from './components/pages/ProductList/ProductList';
import { CartProvider } from './context/CartContext';
import { Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import OrderStatus from './components/OrderStatus/OrderStatus';
import { Nosotros } from './components/pages/Nosotros/Nosotros';
import { Contacto } from './components/pages/Contacto/Contacto';

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/productos" element={<ProductList />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation/:orderId" element={<OrderStatus />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
