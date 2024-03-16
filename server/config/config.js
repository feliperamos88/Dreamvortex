import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

let sequelize;
if (process.env.DATABASE) {
  sequelize = new Sequelize(process.env.DATABASE, { logging: false });
} else {
  if (process.env.NODE_ENV === 'test') {
    sequelize = new Sequelize(createTestDBURL(), {
      logging: false,
      dialectOptions: {
        multipleStatements: true,
      },
    });
  } else {
    sequelize = new Sequelize(createTestDBURL(), {
      logging: false,
      dialectOptions: {
        multipleStatements: true,
      },
    });
  }
}

function createTestDBURL() {
  const DB_NAME = process.env.DB_NAME;
  const DB_USER = process.env.DB_USER;
  const DB_HOST = process.env.DB_HOST;
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const DB_PORT = process.env.DB_PORT;
  return `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
}

export { sequelize };
