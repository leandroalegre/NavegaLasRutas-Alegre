import { useEffect, useState } from "react";
import products from '../../productos.json';

const ItemDetail = ({ productId }) => {
    const product = products.find(p => p.id === productId);

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.nombre}</h1>
                    <img src={product.imagen} alt={product.nombre} />
                    <p>Precio: {product.precio}</p>
                </div>
            ) : (
                <p>Producto no encontrado</p>
            )}
        </div>
    );
};

export default ItemDetail;