import { Router } from "express";
import faturamentoController from "./faturamento.controller";

const router = Router();
router.get("/fatAnoPolo/:ano", faturamentoController.faturamentoAnualPorPolo);

export default router;
