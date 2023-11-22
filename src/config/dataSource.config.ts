import { DataSource } from 'typeorm';
import { PostgresDataSource } from './database.config';

export const dataSource = new DataSource(PostgresDataSource);

export const connectDataSource = async () => {
  try {
    await dataSource.initialize();
    console.log('database connected');
  } catch (error) {
    console.log(error);
  }
};
