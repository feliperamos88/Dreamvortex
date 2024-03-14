import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

let sequelize;
if (process.env.DATABASE) {
  sequelize = new Sequelize(process.env.DATABASE, { logging: false });
} else {
  if (process.env.NODE_ENV === 'test') {
    sequelize = new Sequelize(process.env.LOCAL_DB_TEST_URL, {
      logging: false,
    });
  } else {
    sequelize = new Sequelize(process.env.LOCAL_DB_URL, {
      dialectOptions: {
        multipleStatements: true,
      },
    });
  }
}

export { sequelize };
