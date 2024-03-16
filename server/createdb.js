import pg from 'pg';
const { Client } = pg;
import * as dotenv from 'dotenv';
dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;

async function setupDatabase() {
  const client = new Client({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
  });

  await client.connect();

  const res = await client.query(
    `SELECT datname FROM pg_catalog.pg_database WHERE datname = '${DB_NAME}'`
  );

  if (res.rowCount === 0) {
    console.log(`${DB_NAME} database not found, creating it.`);
    await client.query(`CREATE DATABASE "${DB_NAME}";`);
    console.log(`created database ${DB_NAME}.`);
  } else {
    console.log(`${DB_NAME} database already exists.`);
  }

  await client.end();
}

setupDatabase();
