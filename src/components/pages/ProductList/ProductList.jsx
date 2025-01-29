import { useState } from 'react';
import products from '../../productos.json';
import './ProductList.css';
import { useCart } from '../../../context/CartContext';

export const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const { addToCart } = useCart();

    // Obtener categorías únicas
    const categories = ['Todos', ...new Set(products.map(product => product.categoria))];

    // Filtrar productos por categoría
    const filteredProducts = selectedCategory === 'Todos'
        ? products
        : products.filter(product => product.categoria === selectedCategory);

    return (
        <div className="products-container">
            <div className="filters-section">
                <h2>Nuestros Productos</h2>
                <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="products-grid">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img 
                            src={`/src/assets/imagenes/${product.id}.jpg`} 
                            alt={product.nombre} 
                            className="product-image"
                        />
                        <h3>{product.nombre}</h3>
                        <p className="category-tag">{product.categoria}</p>
                        <p className="price">$ {product.precio}</p>
                        <button 
                            className="add-to-cart-btn"
                            onClick={() => addToCart(product)}
                        >
                            Agregar al carrito
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}; 