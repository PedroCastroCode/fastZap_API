import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  database: 'fastZap',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: ['dist/**/*.schema.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
  logging: true,
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
