import { Request, Response } from "express";

const getContactHandler = (req: Request, res: Response) => {
  const { idContacto } = req.params;

  // Simulación de datos de un contacto
  const contacto = {
    idContacto,
    nombre: "Oscar",
    apellidoPaterno: "López",
    apellidoMaterno: "Salas",
    numeroCelular: "1234567890",
  };

  // Por ahora, simplemente devolvemos el contacto simulado
  res.status(200).json(contacto);
};

export default getContactHandler;
