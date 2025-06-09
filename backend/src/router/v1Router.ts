import { Router } from "express";
import cardsRouter from "../resources/cards/cards.router";
import graficoRouter from "../resources/graficos/graficos.router";

const router = Router();

router.use(
  "/cards",
  // #swagger.tags = ['Auth']
  cardsRouter
);

router.use(
  "/grafico",
  // #swagger.tags = ['Auth']
  graficoRouter
);

export default router;
