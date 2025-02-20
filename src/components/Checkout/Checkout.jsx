import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { createOrder } from '../../services/firebaseServices';
import './Checkout.css';

const Checkout = () => {
    const navigate = useNavigate();
    const { cart, clearCart, getTotalPrice } = useCart();
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });
    const [orderStatus, setOrderStatus] = useState({
        loading: false,
        error: null,
        orderId: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!cart || cart.length === 0) {
            setOrderStatus({
                loading: false,
                error: 'El carrito está vacío',
                orderId: null
            });
            return;
        }

        setOrderStatus({ loading: true, error: null, orderId: null });

        try {
            const orderData = {
                buyer: {
                    name: formData.nombre,
                    email: formData.email,
                    phone: formData.telefono
                },
                items: cart.map(item => ({
                    docId: item.docId,
                    id: item.id,
                    nombre: item.nombre,
                    precio: item.precio,
                    quantity: item.quantity
                })),
                total: getTotalPrice()
            };

            console.log('Enviando orden:', orderData);
            console.log('Items en el carrito:', cart);

            const orderId = await createOrder(orderData);
            
            if (orderId) {
                setOrderStatus({
                    loading: false,
                    error: null,
                    orderId: orderId
                });
                clearCart();
            } else {
                throw new Error('No se pudo crear la orden');
            }

        } catch (error) {
            console.error('Error en checkout:', error);
            setOrderStatus({
                loading: false,
                error: `Error al procesar la orden: ${error.message}`,
                orderId: null
            });
        }
    };

    if (orderStatus.orderId) {
        return (
            <div className="checkout-success">
                <div className="success-icon">✅</div>
                <h2>¡Gracias por tu compra!</h2>
                <div className="order-details">
                    <p className="confirmation-message">
                        Nuestro equipo de ventas se contactará en breve para coordinar la entrega de su compra.
                    </p>
                    <div className="order-code">
                        <p>Código de transacción:</p>
                        <span className="transaction-id">{orderStatus.orderId}</span>
                    </div>
                </div>
                <button 
                    className="back-button"
                    onClick={() => navigate('/')}
                >
                    Volver a la tienda
                </button>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            {orderStatus.error && (
                <div className="error-message">
                    {orderStatus.error}
                </div>
            )}
            <form onSubmit={handleSubmit} className="checkout-form">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                        required
                    />
                </div>
                <div className="order-summary">
                    <h3>Resumen de la orden</h3>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                {item.nombre} x {item.quantity} - ${item.precio * item.quantity}
                            </li>
                        ))}
                    </ul>
                    <p className="total">Total: ${getTotalPrice()}</p>
                </div>
                <button 
                    type="submit" 
                    className="submit-button"
                    disabled={orderStatus.loading || !cart || cart.length === 0}
                >
                    {orderStatus.loading ? 'Procesando...' : 'Finalizar Compra'}
                </button>
            </form>
        </div>
    );
};

export default Checkout; 