# Trabajo Modulo 7

# Segunda parte del trabajo 

🚀 Tech Solutions: Sistema de Gestión de Usuarios (M7)
Desarrollador: Marcelo Mardones Guzmán

Estado: Entregable Final - Módulo 7 (Persistencia Relacional)

Este proyecto es una aplicación web FullStack diseñada para la administración técnica de usuarios. La arquitectura ha sido migrada de un sistema de archivos planos (JSON) a una base de datos relacional robusta, implementando el patrón MVC y Sequelize ORM.

# 📑 Índice
Requerimientos Cumplidos

Stack Tecnológico

Estructura del Proyecto

Instalación y Configuración

Endpoints Disponibles

# ✅ Requerimientos Cumplidos
Persistencia en SQL: Integración completa con PostgreSQL.

Operaciones CRUD: * Create: Registro de usuarios mediante formulario estilizado.

Read: Visualización dinámica de la base de datos en una tabla/grid.

Delete: Eliminación de registros con confirmación de seguridad.

Diseño UI/UX: Interfaz profesional construida con Bootstrap 5 y CSS personalizado (Efectos de elevación y botones CTA).

Arquitectura: Separación clara de responsabilidades (Modelos, Vistas y Controladores).

# 💻 Stack Tecnológico
Backend: Node.js, Express.js.

Frontend: Handlebars (HBS), Bootstrap 5, Bootstrap Icons.

Base de Datos: PostgreSQL.

ORM: Sequelize (v6+).

Variables de Entorno: Dotenv (para protección de credenciales

# 📁 Estructura del Proyecto
EntregaM7/
├── public/               # Estilos CSS y activos estáticos
├── src/
│   ├── config/           # Configuración de conexión a PostgreSQL
│   ├── controllers/      # Lógica de negocio (Sequelize functions)
│   ├── models/           # Definición del modelo 'Usuario'
│   ├── routes/           # Definición de rutas Express
│   └── app.js            # Inicialización del servidor y Middleware
├── views/                # Plantillas Handlebars
│   ├── partials/         # Componentes reutilizables (Navbar, Header)
│   ├── layouts/          # main.hbs (Estructura base)
│   ├── home.hbs          # Panel de bienvenida
│   ├── usuarios.hbs      # Listado de usuarios registrados
│   └── registro.hbs      # Formulario de alta de usuarios
├── .env                  # Configuración de base de datos (Ejemplo incluido)
└── package.json          # Gestión de scripts y dependencias

# 🚀 Instalación y Configuración
## 1. Preparación de la Base de Datos
Asegúrese de tener PostgreSQL instalado y cree una base de datos vacía:

CREATE DATABASE tech_solutions_db;

## 2. Configuración del Entorno
Cree un archivo .env en la raíz con sus credenciales:

PORT=3000
DB_NAME=tech_solutions_db
DB_USER=postgres
DB_PASS=su_contraseña
DB_HOST=localhost

## Ejecución del Proyecto

#   Instalar dependencias
    npm install

#   Iniciar en modo desarrollo (Nodemon)
    npm run dev

# 🔗 Endpoints Disponibles

Método /Ruta                     /  Descripción

GET    /Home                     / Dashboard principal
GET    /usuarios,                /Lista todos los usuarios de PostgreSQL
GET    /registro,                /Muestra el formulario de registro
POST   /registro,                /Guarda un nuevo usuario en la DB
POST   /usuarios/eliminar/:id,   /Elimina un usuario por su ID


> **Nota**: El sistema sincroniza automáticamente los modelos con la base de datos al iniciar el servidor mediante db.sync().

> **Nota**: El servidor utiliza db.sync({ force: false }) para asegurar que las tablas se creen automáticamente al iniciar la aplicación sin borrar los datos existentes.

>**nota**: Esta segunda entrega del trabajo (Modulo 7) se logra utilizar nodemon lo que en la version anterior no permitía por compatibilidad.
