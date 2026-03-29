import { Router } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const router = Router();

// Configuración de __dirname para que funcione correctamente dentro de /routes
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. RUTA RAÍZ (Home)
router.get('/', (req, res) => {
    res.render('home', {
        titulo: "Dashboard de Usuario",
        empresa: "Tech Solutions",
        mensaje1: "Trabajo Módulo 6",
        mensaje2: "Bienvenido al sistema de gestión de usuarios."
    });
});

// 2. RUTA DE USUARIOS (Lectura de JSON)
router.get('/usuarios', (req, res) => {
    try {
        // process.cwd() obtiene la ruta raíz (donde está tu app.js y la carpeta /data)
        const dataPath = path.join(process.cwd(), 'data', 'usuarios.json');

        console.log("📍 Ruta absoluta calculada:", dataPath);

        if (!fs.existsSync(dataPath)) {
            return res.status(404).send(`Error: El archivo no existe en la ruta: ${dataPath}`);
        }

        const data = fs.readFileSync(dataPath, 'utf-8');
        const usuarios = JSON.parse(data);

        res.render('usuarios', {
            titulo: 'Lista de Usuarios Registrados',
            empresa: "Tech Solutions",
            usuarios
        });
    } catch (error) {
        console.error(" Error en el servidor:", error);
        res.status(500).send("Error interno.");
    }
});

// 3. RUTA DE ESTADO (API JSON)
router.get('/status', (req, res) => {
    res.json({
        status: "Operacional",
        version: "1.0.0",
        uptime: Math.floor(process.uptime()) + " segundos"
    });
});

export default router;