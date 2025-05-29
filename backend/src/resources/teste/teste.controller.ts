import { Request, Response } from "express";

async function teste(req: Request, res: Response): Promise<any> {
  return res.status(200).json({ msg: "Aqui tudo certo!" });
}

export default { teste };

/*
interface GraficoPeriodo {
  tipo_ticket: string;
  data: string;
  disponivel: number;
  vendidos: number;
}

async function modalTitle(req: Request, res: Response) {
  //const organizadorId = req.session.uid;
  const idEvento = parseInt(req.params.idEvento);
  try {
    // id e titulo
    const evento = await getDashboardEventoData(organizadorId, idEvento);
    if (!evento)
      return res.status(404).json({ msg: "Nenhum evento encontrado." });
    const eventoData: object = evento;
    return res.status(200).json(eventoData);
  } catch (error) {
    return res.status(500).json(error);
  }
}*/
