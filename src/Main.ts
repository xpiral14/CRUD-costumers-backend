import App from "./App";
import Database from "./database/Database";
import "./database/Database";
export default class Main {
  public static async main() {
    new App();
    const database = new Database();

    database.getConnection().sync({force: true})
    
    await database.testConection()

  }
}

Main.main();
