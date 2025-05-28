import { Router } from "express";
import dashboardController from "./dashboard.controller";
import { isOrganizador } from "../../middlewares/isOrganizador";
import { usuarioAutenticado } from "../../middlewares/usuarioAutenticado";

const router = Router();

router.get(
  "/graficoGeralYFinanceiro/",
  usuarioAutenticado,
  isOrganizador,
  dashboardController.graficoYGeralFinanceiro
);


export default router;