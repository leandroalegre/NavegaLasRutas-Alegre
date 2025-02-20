import { useState, useEffect } from 'react';
import { useCart } from '../../../context/CartContext';
import { getProducts } from '../../../services/firebaseServices';
import './ProductList.css';

const getImageUrl = (id) => {
    try {
        return new URL(`../../../assets/imagenes/${id}.jpg`, import.meta.url).href;
    } catch (error) {
        console.error(`Error cargando imagen ${id}:`, error);
        return '';
    }
};

export const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const { addToCart, cart } = useCart();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                const productsWithIds = productsData.map(product => ({
                    ...product,
                    id: product.id || product.nombre.toLowerCase()
                }));
                console.log('Productos cargados:', productsWithIds);
                setProducts(productsWithIds);
                setLoading(false);
            } catch (error) {
                console.error('Error cargando productos:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const categories = ['Todos', ...new Set(products.map(product => product.categoria))];

    const filteredProducts = selectedCategory === 'Todos'
        ? products
        : products.filter(product => product.categoria === selectedCategory);

    const isOutOfStock = (product) => {
        const cartItem = cart.find(item => item.id === product.id);
        const cartQuantity = cartItem ? cartItem.quantity : 0;
        return product.stock <= cartQuantity;
    };

    if (loading) {
        return <div className="loading">Cargando productos...</div>;
    }

    return (
        <div className="product-list-container">
            <div className="category-buttons">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <div key={product.docId} className={`product-card ${isOutOfStock(product) ? 'out-of-stock' : ''}`}>
                        <div className="product-image-container">
                            <img 
                                src={`/imagenes/${product.id}.jpg`}
                                alt={product.nombre}
                                className={isOutOfStock(product) ? 'grayscale' : ''}
                            />
                            {isOutOfStock(product) && (
                                <div className="out-of-stock-overlay">
                                    <span>Sin Stock</span>
                                </div>
                            )}
                        </div>
                        <h3>{product.nombre}</h3>
                        <p className="category">{product.categoria}</p>
                        <p className="price">${product.precio}</p>
                        <button
                            className="add-to-cart-button"
                            onClick={() => addToCart({...product, docId: product.docId})}
                            disabled={isOutOfStock(product)}
                        >
                            {isOutOfStock(product) ? 'Sin Stock' : 'Agregar al carrito'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}; 