import { useCart } from '../../../context/CartContext';
import './CartWidget.css';

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

    if (!isCartOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target.className === 'cart-widget-overlay') {
            setIsCartOpen(false);
        }
    };

<<<<<<< HEAD
    const handleQuantityChange = (productId, currentQuantity, change, maxStock) => {
        const newQuantity = currentQuantity + change;
        if (newQuantity >= 1 && newQuantity <= maxStock) {
=======
    const handleQuantityChange = (productId, currentQuantity, change) => {
        const newQuantity = currentQuantity + change;
        if (newQuantity >= 1) {
>>>>>>> edabafc0991d472edefee54d819bf31f9571e43a
            updateQuantity(productId, newQuantity);
        }
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
                                    <img src={`/src/assets/imagenes/${item.id}.jpg`} alt={item.nombre} />
                                    <div className="item-details">
                                        <h4>{item.nombre}</h4>
                                        <div className="quantity-controls">
<<<<<<< HEAD
                                            <button onClick={() => handleQuantityChange(item.id, item.quantity, -1, item.stock)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleQuantityChange(item.id, item.quantity, 1, item.stock)}>+</button>
=======
                                            <button onClick={() => handleQuantityChange(item.id, item.quantity, -1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>+</button>
>>>>>>> edabafc0991d472edefee54d819bf31f9571e43a
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
                                <button className="checkout-btn">Finalizar Compra</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}; 