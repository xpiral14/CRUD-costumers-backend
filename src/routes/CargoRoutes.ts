import { Router } from "express";
import CargoContoller from "../controllers/CargoContoller";

const cargoRouter = Router();

cargoRouter.get("/", CargoContoller.index as any);
cargoRouter.get("/:id", CargoContoller.show as any);
cargoRouter.post("/", CargoContoller.create as any);
cargoRouter.put("/:id", CargoContoller.update as any);
cargoRouter.delete("/:id", CargoContoller.delete as any);

export default cargoRouter;
