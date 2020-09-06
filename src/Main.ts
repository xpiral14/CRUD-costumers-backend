import App from "./App";
import Database from "./database/Database";
import "./database/Database";
export default class Main {
  public static async main() {
    const app = new App();
    const database = new Database();

    await database.testConection();

    // Sincroniza as tabelas da aplicação com o banco de dados. 
    // RODE APENAS UMA UNICA VEZ
    await database.getConnection().sync({ force: true });

    // inicia as configurações das rotas da aplicação
    app.initConfig();

    // inicia a segurança da aplicação, caso haja.
    app.initSecurity();

    // Inicia as middlewares globais da aplicação, caso haja.
    app.initMiddlewares();

    //inicia as rotas da aplicação 
    app.initRoutes();

    // inicia o tratador de erros global da aplicação
    app.initHandleRouteErrors();

    // inicia o servidor.
    app.startServer();


  }
}

Main.main();
