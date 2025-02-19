import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../services/firebaseServices';

const OrderStatus = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const { orderId } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await getOrderById(orderId);
        setOrder(orderData);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) return <div>Cargando...</div>;
  if (!order) return <div>Orden no encontrada</div>;

  return (
    <div>
      <h2>Estado de la Orden</h2>
      <p>Número de orden: {order.id}</p>
      <p>Estado: {order.status}</p>
      <h3>Productos:</h3>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>
            {item.nombre} - Cantidad: {item.quantity} - Precio: ${item.precio}
          </li>
        ))}
      </ul>
      <p>Total: ${order.total}</p>
    </div>
  );
};

export default OrderStatus; 