import { Request, Response } from "express";

const postContactListHandler = (req: Request, res: Response) => {
  const { idCliente } = req.params;
  const { pagina } = req.body;

  // Simulación de datos de un contacto
  const contactList = {
    idCliente,
    pagina: 1,
    contactos: [
      {
        nombre: "Oscar",
        apellidoPaterno: "López",
        apellidoMaterno: "Salas",
        numeroCelular: "1234567890"
      }
    ],
    paginacion: {
      "pagina": 1,
      "totalRegistrosPorPagina": 4,
      "totalRegistros": 4,
      "totalPaginas": 1
    }
  };

  // Por ahora, simplemente devolvemos el contactList simulado
  res.status(200).json(contactList);
};

export default postContactListHandler;
