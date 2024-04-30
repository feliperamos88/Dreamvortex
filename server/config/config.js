import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

function createDB_URI() {
  const DB_NAME = process.env.DB_NAME;
  const DB_USER = process.env.DB_USER;
  const DB_HOST = process.env.DB_HOST;
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const DB_PORT = process.env.DB_PORT;
  return `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
}

let sequelize;

if (process.env.NODE_ENV === 'test') {
  sequelize = new Sequelize(process.env.DB_URI_TEST, {
    logging: false,
    dialectOptions: {
      multipleStatements: true,
    },
  });
} else {
  if (process.env.DB_URI) {
    sequelize = new Sequelize(process.env.DB_URI, { logging: false });
  } else {
    sequelize = new Sequelize(createDB_URI(), {
      logging: false,
      dialectOptions: {
        multipleStatements: true,
      },
    });
  }
}

export { sequelize };
