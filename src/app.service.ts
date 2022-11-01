import { Injectable } from "@nestjs/common";
import { Client } from "pg";

// function postgresCS() {
//   const postgres_user = process.env.POSTGRES_USER;
//   const postgres_pw = process.env.POSTGRES_PASSWORD;
//   const postgres_host = process.env.POSTGRES_HOST;
//   const postgres_db = process.env.POSTGRES_DBNAME;

//   if (postgres_user === undefined || postgres_pw === undefined) {
//     console.log("Undefined postgres credentials");
//     return null;
//   }

//   return `postgres://${postgres_user}:${postgres_pw}@${postgres_host}/${postgres_db}`;
// }

const cs = "postgres://postgresUser:postgresPW@localhost:5455/postgres";
// const cs = postgresCS();

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
    return "Hello VeriDID DevOps!";
  }
}
