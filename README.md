# E-commerce React + Firebase

[Ver Demo](https://trabajo-final-alegre-o3d0grc7w-leandro-alegres-projects.vercel.app/) <!-- Reemplaza con tu URL de Vercel -->

## Descripción

Aplicación de comercio electrónico desarrollada con React, Vite y Firebase. Permite a los usuarios navegar por productos, gestionar un carrito de compras y realizar pedidos con persistencia en tiempo real, actualizando el stock en cada pedido.

## Características

- **Catálogo de Productos**: 
  - Visualización y filtrado por categorías
  - Vista detallada de cada producto
  - Control de stock en tiempo real
- **Carrito de Compras**: 
  - Gestión completa con actualización en tiempo real
  - Persistencia de datos
  - Validación de stock
- **Proceso de Checkout**: 
  - Formulario de contacto
  - Validación de datos
  - Confirmación de orden con ID
- **Firebase Integration**:
  - Base de datos en tiempo real
  - Gestión de órdenes
  - Control de stock automático

## Tecnologías Utilizadas

- React 18
- Vite
- Firebase/Firestore
- React Router DOM
- Context API
- CSS Modules

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/leandroalegre/TrabajoFinal-Alegre.git
   ```
2. Instala las dependencias:
   ```bash
   cd TrabajoFinal-Alegre
   npm install
   ```
3. Configura las variables de entorno en `.env`:
   ```
   VITE_FIREBASE_API_KEY=tu-api-key
   VITE_FIREBASE_AUTH_DOMAIN=tu-auth-domain
   VITE_FIREBASE_PROJECT_ID=tu-project-id
   VITE_FIREBASE_STORAGE_BUCKET=tu-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu-sender-id
   VITE_FIREBASE_APP_ID=tu-app-id
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto

```
src/
  ├── assets/
  │   └── imagenes/      # Imágenes de productos
  ├── components/
  │   ├── common/        # Componentes reutilizables
  │   ├── layouts/       # Componentes de estructura
  │   └── pages/         # Componentes de página
  ├── context/           # Contextos de React
  ├── services/          # Servicios de Firebase
  └── App.jsx            # Componente principal
```

## Funcionalidades

- Navegación entre categorías
- Filtrado de productos
- Carrito de compras persistente
- Control de stock en tiempo real
- Proceso de checkout
- Generación de órdenes en Firestore
- Actualización automática de stock

## Autor

Leandro Alegre


