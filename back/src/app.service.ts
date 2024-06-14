import * as fs from "fs";
import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { join } from "path";

@Injectable()
export class AppService {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly entityManager: EntityManager) {}

  async executeSQLFromFile(): Promise<any> {
    const filePath = join(__dirname, "..", "SQL", "import.sql");
    const sqlQuery = fs.readFileSync(filePath, "utf8");

    try {
      const result = await this.entityManager.query(sqlQuery);
      return result;
    } catch (error) {
      throw new Error(`Failed to execute SQL query: ${error.message}`);
    }
  }

  getHello(): string {
    return "Hello World!";
  }
}
