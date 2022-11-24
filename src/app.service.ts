import { Injectable } from "@nestjs/common";
import { Client } from "pg";

const postgres_user = process.env.POSTGRES_USER;
const postgres_pw = process.env.POSTGRES_PASSWORD;
const postgres_host = process.env.POSTGRES_HOST;

console.log("user: " + postgres_user);
console.log("pw: " + postgres_pw);
console.log("host: " + postgres_host);

const cs = `postgres://${postgres_user}:${postgres_pw}@${postgres_host}/postgres`;

// const cs = "postgres://postgresUser:postgresPW@10.109.20.239:5432/postgres";

// docker run --name myPostgresDb -p 5455:5432 -e POSTGRES_USER=postgresUser -e POSTGRES_PASSWORD=postgresPW -e POSTGRES_DB=postgresDB -d postgres

@Injectable()
export class AppService {
  getHello(): string {
    const client = new Client(cs);
    const dbQuery = async () => {
      await client.connect();
      const res = await client.query("SELECT $1::text as message", [
        "Hello world!",
      ]);
      console.log(res.rows[0].message); // Hello world!
      await client.end();
    };
    dbQuery();
    return 'Hello VeriDID Team! 😊😊😊';
  }
}
