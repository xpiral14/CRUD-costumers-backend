import dbConfig from "../config/database";

import { Sequelize } from "sequelize-typescript";

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
      console.log("connected with mariadb");
    } catch (error) {
      console.log("error trying to connect to mariadb");
    }
  }

  public getConnection() {
    return this.connection;
  }
}

export default Database;
