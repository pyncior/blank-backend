import { Request, Response } from "express";

const createContactHandler = (req: Request, res: Response) => {
  const { nombre, apellidoPaterno, apellidoMaterno, numeroCelular } = req.body;

  // Verificar si los datos requeridos están presentes
  if (!nombre || !apellidoPaterno || !apellidoMaterno || !numeroCelular) {
    return res.status(400).json({ mensaje: "Faltan datos requeridos" });
  }

  // Aquí podrías incluir la lógica para crear el contacto en la base de datos o en algún otro lugar
  // Por ahora, solo devolvemos los datos recibidos
  res.status(201).json({
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    numeroCelular,
  });
};

export default createContactHandler;
