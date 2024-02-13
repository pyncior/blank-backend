import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";
import { body, validationResult } from "express-validator";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("¡Bienvenido a mi aplicación backend con Express y TypeScript!");
});

app.post(
  "/ejemplo",
  [body("nombre").isLength({ min: 5 }).withMessage("El nombre debe tener al menos 5 caracteres")],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nombre } = req.body;
    res.json({ mensaje: `Hola, ${nombre}! Este es un ejemplo de ruta con validación de entrada.` });
  },
);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
