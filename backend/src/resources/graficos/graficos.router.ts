import { Router } from "express";
import { getGrafico } from "./graficos.controller";

const router = Router();

// Cards de Mão de Obra pegos pelo ultimo mes "valido". Dois meses atras da data atual
router.get("/getGrafico/", getGrafico);

export default router;
