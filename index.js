const express = require('express');
const cors = require('cors');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación backend con Express!');
});

// Ruta de ejemplo con validación de entrada
app.post('/ejemplo', [
    body('nombre').isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { nombre } = req.body;
    res.json({ mensaje: `Hola, ${nombre}! Este es un ejemplo de ruta con validación de entrada.` });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
