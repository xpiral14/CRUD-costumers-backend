import dotenv from "dotenv";
import express from "express";

import helmet from "helmet";
import cors from "cors";
import CargoRouter from "./routes/CargoRoutes";
import HttpException from "./exceptions/HttpException";
import HTTPStatusCode from "./constants/HTTPStatusCode";
import funcionarioRouter from "./routes/FuncionarioRoutes";

dotenv.config();

export default class App {
  private server: express.Express;

  constructor() {
    this.server = express();
    this.initConfig();
    this.initSecurity();
    this.initMiddlewares();
    this.initRoutes();
    this.initHandleRouteErrors();
    this.startServer();
  }

  public initConfig() {
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json());
    this.server.use(cors({ origin: "http://localhost:3000" }));
  }

  public initMiddlewares() {}
  public initSecurity() {
    this.server.use(helmet());
  }

  public initRoutes() {
    this.server.use("/cargos", CargoRouter);
    this.server.use("/funcionarios", funcionarioRouter);
  }

  public initHandleRouteErrors() {
    this.server.use((err: any, req: any, res: any, next: any) => {
      if (err instanceof HttpException)
        return res.status(err.getStatus()).json(err.message || null);

      return res.status(HTTPStatusCode.INTERNAL_ERROR).json(err.message);
    });
  }

  public startServer() {
    return this.server.listen(+(process.env.APP_PORT as string) || 3005, () => {
      console.log("App has started on " + process.env.APP_PORT);
    });
  }
}
