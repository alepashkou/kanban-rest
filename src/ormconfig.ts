import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

export default {
  type: 'postgres',
  cache: false,
  url: 'postgres://backend-team7-main-db-02fdbd3ab703c49fe:4Ztr7fmKudyNdf1XHc1K7aYA9nfGut@user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com:5432/backend-team7-main-db-02fdbd3ab703c49fe',
  synchronize: false,
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['src/resources/**/**.entity{.ts,.js}'],
  migrations: ['./migrations/*.ts'],
} as ConnectionOptions;
