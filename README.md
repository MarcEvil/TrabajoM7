# 🚀 Sistema de Gestión Tech Solutions - Módulo 6

Este proyecto representa la culminación de la **Parte 1 del Módulo 6**. Se ha construido un servidor robusto con **Node.js** y **Express**, aplicando una arquitectura limpia, modular y preparada para el escalamiento.

---

## 📂 Arquitectura del Proyecto

Para este desarrollo, se aplicó una separación de responsabilidades (SoC), organizando el código en directorios especializados:

* **`app.js`**: 🧠 Punto de entrada principal. Configura el motor Handlebars y los middlewares globales.
* **`routes/`**: 📍 Contiene la lógica de los endpoints. Se utilizó `Express Router` para desacoplar las rutas del servidor principal.
* **`data/`**: 📦 Persistencia de datos en archivos planos (`usuarios.json`).
* **`logs/`**: 📝 Registro histórico de actividad (`log.txt`) generado por middleware de auditoría.
* **`public/`**: 🎨 Recursos estáticos (CSS, JS, imágenes) servidos de forma directa.
* **`views/`**: 🎭 Plantillas dinámicas:
    * `layouts/`: Estructura base maestra (`main.hbs`).
    * `partials/`: Componentes reutilizables (**Header** y **Footer**).

---

## 🛠️ Stack Tecnológico

* **Runtime**: Node.js (v18+) 🟢
* **Framework**: Express.js 🚂
* **Motor de Plantillas**: Handlebars (HBS) 🎭
* **Gestión de Variables**: Dotenv 🔐
* **Estándar de Código**: ES Modules (`import/export`) 📦
* **Persistencia**: Módulo nativo `fs` (File System) 📑

---

## ⚙️ Configuración e Instalación

Siga estos pasos para poner en marcha el servidor:

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Configurar entorno**:
    Cree un archivo `.env` en la raíz con el siguiente contenido:
    ```env
    PORT=3000
    ```

3.  **Ejecutar el servidor**:
    * **Desarrollo**: `npm run dev` (Recomendado)
    * **Producción**: `npm start`

---

## 📝 Decisiones de Diseño

### 1. Enrutamiento Modularizado
A diferencia de aplicaciones básicas, las rutas se extrajeron a la carpeta `routes/`. Esto permite que el archivo `app.js` permanezca limpio y se centre únicamente en la configuración del entorno.

### 2. Rutas Absolutas Robustas
Se implementó `process.cwd()` para la lectura de la base de datos JSON. Esto garantiza que el servidor encuentre los archivos de datos sin importar desde qué directorio se ejecute el proceso de Node. 📍

### 3. Sistema de Auditoría (Middleware)
Se diseñó un middleware personalizado que intercepta cada solicitud y registra en tiempo real el método HTTP, la URL y la marca de tiempo en `logs/log.txt`. 🕒

---

## 🔗 Endpoints del Sistema

| Ruta | Método | Función |
| :--- | :--- | :--- |
| `/` | `GET` | Dashboard de inicio con datos dinámicos. |
| `/usuarios` | `GET` | Renderizado de lista de usuarios desde JSON. |
| `/status` | `GET` | Estado operacional y tiempo de actividad (Uptime). |

---

> **Nota**: Este proyecto ha sido desarrollado como parte del programa de formación **FullStack JavaScript Trainee 2026**. ✅
> **Nota**: Iconos o caracteres especiales obtenidos utilizando las teclas "windows + ."
>**Nota**: Enlace a carpeta subida a Google Drive https://drive.google.com/drive/folders/11D4T-PUvtwxIYrQYA4jD6Emj-B1dGce2?usp=sharing
>**nota**: Al intentar instalar nodemon y ejecutar run dev causaba conflicto de compativilidad, asique decidí ejecutarlo con "npm start"# TrabajoM7
# TrabajoM7
