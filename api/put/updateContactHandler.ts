import { Request, Response } from "express";

const updateContactHandler = (req: Request, res: Response) => {
  const { idContacto } = req.params;
  const { nombre, apellidoPaterno, apellidoMaterno, numeroCelular } = req.body;

  // Verificar si los datos requeridos están presentes
  if (!nombre || !apellidoPaterno || !apellidoMaterno || !numeroCelular) {
    return res.status(400).json({ mensaje: "Faltan datos requeridos" });
  }

  // Aquí podrías incluir la lógica para actualizar el contacto en la base de datos o en algún otro lugar
  // Por ahora, simplemente devolvemos un mensaje de éxito
  res.status(200).json({
    mensaje: `Contacto con ID ${idContacto} actualizado correctamente`,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    numeroCelular,
  });
};

export default updateContactHandler;
