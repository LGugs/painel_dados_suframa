import { Router } from "express";
//import dashboardController from "./dashboard.controller";
//import { isOrganizador } from "../../middlewares/isOrganizador";
//import { usuarioAutenticado } from "../../middlewares/usuarioAutenticado";

const router = Router();

router.get(
  "/graficoGeralYFinanceiro/"
);

/*
router.post("/comprador",
    validarSchema(Schemascomprador.schemaCadastroComprador),
    isCPFValid,
    authController.cadastrarComprador
);*/

export default router;