import './App.css';
import { Navbar } from "./components/layouts/navbar/Navbar";
import { Footer } from './components/layouts/footer/Footer';
import { ProductList } from './components/pages/ProductList/ProductList';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <ProductList />
          <Footer />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
