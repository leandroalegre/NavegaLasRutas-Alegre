import { useCart } from '../../../context/CartContext';
import './CartWidget.css';
import { useNavigate } from 'react-router-dom';

export const CartWidget = () => {
    const { 
        cart, 
        removeFromCart, 
        updateQuantity,
        clearCart,
        getTotalPrice, 
        isCartOpen, 
        setIsCartOpen 
    } = useCart();
    const navigate = useNavigate();

    if (!isCartOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target.className === 'cart-widget-overlay') {
            setIsCartOpen(false);
        }
    };

    const handleQuantityChange = (productId, currentQuantity, change, maxStock) => {
        const newQuantity = currentQuantity + change;
        if (newQuantity >= 1 && newQuantity <= maxStock) {
            updateQuantity(productId, newQuantity);
        }
    };

    const handleCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    return (
        <div className="cart-widget-overlay" onClick={handleOverlayClick}>
            <div className="cart-widget">
                <button className="close-cart" onClick={() => setIsCartOpen(false)}>×</button>
                <h3>Carrito de Compras</h3>
                {cart.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <img 
                                        src={`/imagenes/${item.id}.jpg`}
                                        alt={item.nombre}
                                    />
                                    <div className="item-details">
                                        <h4>{item.nombre}</h4>
                                        <div className="quantity-controls">
                                            <button 
                                                className="quantity-btn"
                                                onClick={() => handleQuantityChange(item.id, item.quantity, -1, item.stock)}
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button 
                                                className="quantity-btn"
                                                onClick={() => handleQuantityChange(item.id, item.quantity, 1, item.stock)}
                                                disabled={item.quantity >= item.stock}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p>Precio: ${item.precio * item.quantity}</p>
                                    </div>
                                    <button 
                                        className="remove-item"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-total">
                            <h4>Total: ${getTotalPrice()}</h4>
                            <div className="cart-actions">
                                <button className="clear-cart-btn" onClick={clearCart}>
                                    Vaciar Carrito
                                </button>
                                <button className="checkout-btn" onClick={handleCheckout}>
                                    Finalizar Compra
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}; 