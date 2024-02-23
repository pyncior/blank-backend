import { Request, Response } from "express";

const getContactListHandler = (req: Request, res: Response) => {
  const { idUsuario } = req.params;

  // Simulación de datos de un contacto
  const contactList = {
    idUsuario,
    contacts: [
      {
        nombre: "Oscar",
        apellidoPaterno: "López",
        apellidoMaterno: "Salas",
        numeroCelular: "1234567890"
      }
    ]
  };

  // Por ahora, simplemente devolvemos el contactList simulado
  res.status(200).json(contactList);
};

export default getContactListHandler;
