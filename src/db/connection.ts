import pgp from "pg-promise";

const pgpInstance = pgp();

const dbConfig = {
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT!),
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
};

const db = pgpInstance(dbConfig);

export default db;
