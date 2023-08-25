import { Sequelize } from "sequelize";
const databaseUrl  = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error('DATABASE_URL is not defined in environment variables');
  }
  
const sequelize = new Sequelize(databaseUrl , {
    dialect: 'postgres',
    logging: false,
    pool: {
        max: 9,
        min: 0,
        idle: 10000,
    },
});

export default sequelize;

// import dotenv from "dotenv";
// dotenv.config();

// const DB_URL = process.env.DATABASE_URL;

// const db_url = config.get("DATABASE_URL") as string;
// const dotenv = require("dotenv");
// dotenv.config();

// const urlVar = process.env.DATABASE_URL;

// const db_url = urlVar || 'postgres://postgresseq_user:psw6eXXuqVgnSzj6cj2wdkaCU4TmAomY@dpg-cjiua4ocfp5c73b6n3v0-a/postgresseq';

// module.exports =  new Sequelize(DB_URL,{
//     host: 'localhost',
//     dialect: 'postgres',
//     operatorsAliases: false,
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     },
//   });


// const { Pool } = require('pg')
// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// })

// pool.connect((error: any) => {
//     if (error) throw error
//     console.log("Connect to PostgreSQL successfully!")
// })
// module.exports = pool

// import { Sequelize } from "sequelize";
// const sequelize = new Sequelize('postgres','postgres','1234',{
//     host:"127.0.0.1" || "localhost",
//     dialect:'postgres',
//     logging:false,
//     pool: {
//         max: 9,
//         min: 0,
//         idle: 10000
//       }
// });

// export default sequelize;
