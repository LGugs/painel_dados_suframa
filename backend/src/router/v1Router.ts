import { Router } from "express";

import testeRouter from "../resources/teste/teste.router";

const router = Router();

router.use(
  "/teste",
  // #swagger.tags = ['Auth']
  testeRouter
);

export default router;