import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/firebaseServices';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div>
      <h1>{product.nombre}</h1>
      <img src={product.imagen} alt={product.nombre} />
      <p>Precio: ${product.precio}</p>
      <p>Categoría: {product.categoria}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

export default ItemDetailContainer; 