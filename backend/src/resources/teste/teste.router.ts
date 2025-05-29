import { Router } from "express";
import testeController from "./teste.controller";

//import dashboardController from "./dashboard.controller";
//import { isOrganizador } from "../../middlewares/isOrganizador";
//import { usuarioAutenticado } from "../../middlewares/usuarioAutenticado";

const router = Router();
router.get("/index/", testeController.teste);

/*
router.post("/comprador",
    validarSchema(Schemascomprador.schemaCadastroComprador),
    isCPFValid,
    authController.cadastrarComprador
);*/

export default router;
