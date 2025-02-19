import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../services/firebaseServices';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const fetchProducts = async () => {
      try {
        const data = categoryId 
          ? await getProductsByCategory(categoryId)
          : await getProducts();
        console.log('Productos obtenidos:', data);
        setProducts(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      {/* Renderiza tus productos aquí */}
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.nombre}</h2>
          <img src={product.imagen} alt={product.nombre} />
          <p>Precio: ${product.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer; 