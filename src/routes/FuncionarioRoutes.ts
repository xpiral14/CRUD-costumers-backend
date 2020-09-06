import { Router } from "express";

import FuncionarioController from "../controllers/FuncionarioController";

const funcionarioRouter = Router();

funcionarioRouter.get("/", FuncionarioController.index as any);
funcionarioRouter.get("/:id", FuncionarioController.show as any);
funcionarioRouter.post("/", FuncionarioController.create as any);
funcionarioRouter.put("/:id", FuncionarioController.update as any);
funcionarioRouter.delete("/:id", FuncionarioController.delete as any);

export default funcionarioRouter;
