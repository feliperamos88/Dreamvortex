import pg from 'pg';
import * as fs from 'fs';
const { Client } = pg;
import * as dotenv from 'dotenv';
dotenv.config({});

const DB_NAME = process.env.DB_NAME || 'game_db';
const DB_USER = process.env.DB_USER || 'postgres';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
const DB_URI = `LOCAL_DB_URL=postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

function createEnv() {
  const content = DB_URI;
  try {
    fs.writeFileSync('.env', content);
    console.log('.env file with DB_URI created');
  } catch (err) {
    console.error(err);
  }
}

async function setupDatabase() {
  const client = new Client({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: 5432,
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
  createEnv();

  await client.end();
}

setupDatabase();
