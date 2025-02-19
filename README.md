# Nombre del Proyecto

## Descripción

Este proyecto es una aplicación de comercio electrónico desarrollada con React y Vite. Permite a los usuarios navegar por una lista de productos, agregar productos a un carrito de compras y realizar compras basadas en el stock disponible.

## Características

- **Catálogo de Productos**: Muestra una lista de productos con detalles como nombre, imagen, precio, categoría y stock.
- **Carrito de Compras**: Permite a los usuarios agregar productos al carrito, actualizar cantidades y eliminar productos.
- **Control de Stock**: Asegura que los usuarios no puedan agregar más productos al carrito de los que hay en stock.
- **Persistencia de Datos**: Utiliza `localStorage` para guardar el estado del carrito entre sesiones.
- **Variables de Entorno**: Configuración de variables de entorno para gestionar configuraciones sensibles.

## Componentes Principales

- **`CartWidget`**: Componente que muestra el contenido del carrito y permite la gestión de productos en el mismo.
- **`ItemDetail`**: Componente que muestra los detalles de un producto individual.
- **`CartContext`**: Contexto de React que maneja el estado global del carrito de compras.
- **`productos.json`**: Archivo JSON que contiene la lista de productos disponibles.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd tu-repositorio
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso

1. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

2. Abre tu navegador y visita `http://localhost:5173` para ver la aplicación en acción.

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables:
