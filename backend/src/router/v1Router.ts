import { Router } from "express";

import testeRouter from "../resources/teste/teste.router";
import faturamentoRouter from "../resources/faturamento/faturamento.router";
import cardsRouter from "../resources/cards/cards.router";

const router = Router();

router.use(
  "/teste",
  // #swagger.tags = ['Auth']
  testeRouter
);

router.use(
  "/faturamento",
  // #swagger.tags = ['Auth']
  faturamentoRouter
);

router.use(
  "/cards",
  // #swagger.tags = ['Auth']
  cardsRouter
);

export default router;
