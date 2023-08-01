// import { DataSource } from 'typeorm';
// import dotenv from "dotenv";

// dotenv.config();

// export const connectionSource = new DataSource({
//   type: 'postgres',
//   host: process.env.DATABASE_HOSTNAME,
//   port: Number(process.env.DATABASE_PORT),
//   username: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
//   entities: ['src/**/**.entity{.ts,.js}'],
//   migrations: ['src/migration/**/*{.ts,.js}'],
//   migrationsTableName: 'migrations',
//   logging: true,
//   synchronize: false
// });

import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'agricultureChangeIt',
    database: 'agriculture',
    entities: ['src/**/**.entity{.ts,.js}'],
    migrations: ['src/migration/*{.ts,.js}'],
    logging: false,
    synchronize: false,
});