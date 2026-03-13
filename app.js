
import 'dotenv/config';
import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Importación de las rutas modularizadas
import indexRoutes from './src/routes/index.js';

// Configuración de rutas de archivos para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Configuración del Motor de Plantillas (Handlebars)
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    // Configuración de carpetas para vistas parciales (Header/Footer)
    partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// 2. Middlewares Globales
// Servir archivos estáticos (CSS, JS, Imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware de Logs: Registro de auditoría en archivo plano
app.use((req, res, next) => {
    const logPath = path.join(__dirname, 'logs', 'log.txt');
    const logEntry = `[${new Date().toLocaleString()}] Metodo: ${req.method} - Ruta: ${req.url}\n`;

    fs.appendFile(logPath, logEntry, (err) => {
        if (err) console.error("Error crítico al escribir en el log:", err);
    });
    next();
});

// 3. Vinculación de Rutas
// Delegamos la lógica de las rutas al archivo especializado en la carpeta /routes
app.use('/', indexRoutes);

// 4. Manejo de errores 404 (Opcional pero recomendado para la entrega)
app.use((req, res) => {
    res.status(404).render('home', {
        titulo: "404 - No encontrado",
        mensaje1: "Error 404",
        mensaje2: "La pagina que buscas no existe."
    });
});

// Lanzamiento del Servidor
app.listen(PORT, () => {
    console.log(` Servidor funcionando en: http://localhost:${PORT}`);
});