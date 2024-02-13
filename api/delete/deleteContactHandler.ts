import { Request, Response } from "express";

const deleteContactHandler = (req: Request, res: Response) => {
  const { idContacto } = req.params;

  // Aquí podrías incluir la lógica para eliminar el contacto de la base de datos o de algún otro lugar
  // Por ahora, simplemente devolvemos un mensaje de éxito
  res.status(200).json({
    mensaje: `Contacto con ID ${idContacto} eliminado correctamente`,
  });
};

export default deleteContactHandler;
