import { Router } from "express";
import { maoDeObraPoloAnoMes, getCards } from "./cards.controller";

const router = Router();
router.get("/maoDeObraPoloMes/:ano", maoDeObraPoloAnoMes);

router.get("/maoDeObraPoloMes/:ano/mes/:mes", maoDeObraPoloAnoMes);

// Cards de Mão de Obra pegos pelo ultimo mes "valido". Dois meses atras da data atual
router.get("/getCards/", getCards);

export default router;
