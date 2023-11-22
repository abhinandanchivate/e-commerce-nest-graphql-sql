import * as dotenv from 'dotenv';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

dotenv.config();

export const PostgresDataSource: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/database/entity/*.js'], // ts---> .js
  migrations: ['dist/database/migration/*.js'], // ts--->.js
  synchronize: false,
  migrationsRun: false,
  logging: true,
};
