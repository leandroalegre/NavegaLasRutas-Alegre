import './navbar.css';
import { useCart } from '../../../context/CartContext';
import { CartWidget } from '../../common/CartWidget/CartWidget';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const { getTotalItems, setIsCartOpen } = useCart();
    const [isNavOpen, setIsNavOpen] = useState(true);
    const navigate = useNavigate();
    
    return(
        <>
            <nav className={`navbar-vertical ${!isNavOpen ? 'navbar-closed' : ''}`}>
                <div className="nav-header">
                    <h2>Menú</h2>
                    <button 
                        className="toggle-nav"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        {isNavOpen ? '←' : '→'}
                    </button>
                </div>
                <ul className="nav-list">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li>
                        <Link to="/nosotros">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                    <li className="cart-item" onClick={() => setIsCartOpen(true)}>
                        <span className="cart-icon">🛒</span>
                        Carrito
                        {getTotalItems() > 0 && (
                            <span className="cart-count">{getTotalItems()}</span>
                        )}
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </>
    );
};