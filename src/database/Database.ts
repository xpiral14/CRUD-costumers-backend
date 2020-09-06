import { Sequelize } from "sequelize-typescript";

import dbConfig from "../config/database";

class Database {
  private connection: Sequelize;

  constructor() {
    this.connection = new Sequelize(
      dbConfig.database as string,
      dbConfig.username as string,
      dbConfig.password as string,
      dbConfig as any
    );
  }
  async testConection() {
    try {
      await this.connection.authenticate();
      console.log("Banco de dados conectado com sucesso");
    } catch (error) {
      console.log("Erro ao conectar-se com o banco. Erro: " + error.message);
    }
  }

  public getConnection() {
    return this.connection;
  }
}

export default Database;
