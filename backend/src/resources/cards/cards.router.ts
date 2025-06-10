import { Router } from "express";
import { getCards } from "./cards.controller";

const router = Router();

// Retorna os cards dos tipos Faturamento ou Mão de Obra
// v1/cards/getCards?tipo=MaoDeObra ou  v1/cards/getCards?tipo=Faturamento

router.get("/getCards/", getCards);

export default router;
