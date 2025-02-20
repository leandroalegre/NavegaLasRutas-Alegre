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

            const orderId = await createOrder(orderData);
            
            if (orderId) {
                setOrderStatus({
                    loading: false,
                    error: null,
                    orderId: orderId
                });
                clearCart();
                navigate('/');
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

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            {orderStatus.error && (
                <div className="error-message">
                    {orderStatus.error}
                </div>
            )}
            <form onSubmit={handleSubmit} className="checkout-form">
                {/* ... resto del formulario ... */}
            </form>
        </div>
    );
};

export default Checkout;