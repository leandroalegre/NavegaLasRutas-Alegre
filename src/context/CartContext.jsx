import { createContext, useState, useContext, useEffect } from 'react';
import { updateProductStock, getCurrentStock } from '../services/firebaseServices';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Verificar y actualizar stock en tiempo real
    useEffect(() => {
        const updateStockInfo = async () => {
            if (cart.length > 0) {
                const updatedCart = await Promise.all(
                    cart.map(async (item) => {
                        try {
                            const currentStock = await getCurrentStock(item.id);
                            return { ...item, stock: currentStock };
                        } catch (error) {
                            console.error(`Error actualizando stock para ${item.id}:`, error);
                            return item;
                        }
                    })
                );
                setCart(updatedCart);
            }
        };

        updateStockInfo();
    }, []);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                if (existingProduct.quantity >= product.stock) {
                    return prevCart;
                }
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const updateStock = async () => {
        try {
            for (const item of cart) {
                await updateProductStock(item.id, item.stock - item.quantity);
            }
            return true;
        } catch (error) {
            console.error('Error actualizando stock:', error);
            return false;
        }
    };

    const getTotalItems = () => {
        return cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            updateQuantity,
            updateStock,
            isCartOpen,
            setIsCartOpen,
            getTotalItems,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
}; 