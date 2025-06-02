import { Router } from "express";

import testeRouter from "../resources/teste/teste.router";
import faturamentoRouter from "../resources/faturamento/faturamento.router";
import maoDeObraRouter from "../resources/maodeobra/maodeobra.router";

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
  "/maodeobra",
  // #swagger.tags = ['Auth']
  maoDeObraRouter
);

export default router;
