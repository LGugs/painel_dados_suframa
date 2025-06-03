import { Router } from "express";
import maodeobraController from "./maodeobra.controller";

const router = Router();
router.get("/maoDeObraPoloMes/:ano", maodeobraController.maoDeObraPoloAnoMes);

router.get(
  "/maoDeObraPoloMes/:ano/mes/:mes",
  maodeobraController.maoDeObraPoloAnoMes
);

router.get(
  "/maoDeObraAcuAnoMes/:ano/mes/:mes",
  maodeobraController.maoDeObraAcuAnoMes
);

export default router;
