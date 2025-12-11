import db from "./connection";

export const runMigrations = async () => {
  try {
    await db.none(`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `);

    await db.none(`CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);

    await db.none(`CREATE TABLE IF NOT EXISTS user_profile (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id UUID NOT NULL UNIQUE,
        avatar_url VARCHAR(3000),
        bio TEXT,
        stacks JSON,
        social_medias JSON,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE

        
        )`);
    console.log("Migração realizada com sucesso.");
  } catch (error) {
    console.error("Erro na migração", error);
  }
};
