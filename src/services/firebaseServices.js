import { db } from '../firebaseConfig';
import { collection, getDocs, doc, getDoc, query, where, addDoc, updateDoc, serverTimestamp } from 'firebase/firestore';

// Obtener todos los productos
export const getProducts = async () => {
  try {
    const productsCollection = collection(db, 'productos');
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map(doc => ({
      docId: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    throw error;
  }
};

// Obtener un producto por ID
export const getProductById = async (productId) => {
  try {
    const productRef = doc(db, 'productos', productId);
    const snapshot = await getDoc(productRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    throw error;
  }
};

// Obtener productos por categoría
export const getProductsByCategory = async (category) => {
  try {
    const productsCollection = collection(db, 'productos');
    const q = query(productsCollection, where("categoria", "==", category));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error obteniendo productos por categoría:", error);
    throw error;
  }
};

// Actualizar el stock de un producto
export const updateProductStock = async (productId, newStock) => {
  try {
    const productRef = doc(db, 'productos', productId);
    await updateDoc(productRef, {
      stock: newStock
    });
    return true;
  } catch (error) {
    console.error('Error actualizando stock:', error);
    throw error;
  }
};

// Crear una nueva orden
export const createOrder = async (orderData) => {
  try {
    if (!orderData.items || !Array.isArray(orderData.items)) {
      throw new Error('Datos de orden inválidos');
    }

    for (const item of orderData.items) {
      const productRef = doc(db, 'productos', item.docId);
      const productSnap = await getDoc(productRef);
      
      if (!productSnap.exists()) {
        throw new Error(`Producto no encontrado: ${item.nombre}`);
      }
      
      const productData = productSnap.data();
      if (productData.stock < item.quantity) {
        throw new Error(`Stock insuficiente para: ${item.nombre}`);
      }
    }

    const ordersCollection = collection(db, 'orders');
    const order = {
      buyer: orderData.buyer,
      items: orderData.items.map(item => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        quantity: item.quantity
      })),
      total: orderData.total,
      date: serverTimestamp(),
      status: 'pending'
    };

    const docRef = await addDoc(ordersCollection, order);

    for (const item of orderData.items) {
      const productRef = doc(db, 'productos', item.docId);
      const productSnap = await getDoc(productRef);
      const currentStock = productSnap.data().stock;
      
      await updateDoc(productRef, {
        stock: currentStock - item.quantity
      });
    }

    return docRef.id;
  } catch (error) {
    throw error;
  }
};

// Obtener una orden por su ID
export const getOrderById = async (orderId) => {
  try {
    const orderRef = doc(db, 'orders', orderId);
    const snapshot = await getDoc(orderRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error obteniendo orden:", error);
    throw error;
  }
};

// Obtener el stock actual de un producto
export const getCurrentStock = async (productId) => {
  try {
    const productRef = doc(db, 'productos', productId);
    const productSnap = await getDoc(productRef);
    if (productSnap.exists()) {
      return productSnap.data().stock;
    }
    throw new Error('Producto no encontrado');
  } catch (error) {
    console.error('Error obteniendo stock:', error);
    throw error;
  }
}; 