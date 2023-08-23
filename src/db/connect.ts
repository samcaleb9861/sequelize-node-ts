import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres','postgres','1234',{
    host:"127.0.0.1" || "localhost",
    dialect:'postgres',
    logging:false,
    pool: {
        max: 9,
        min: 0,
        idle: 10000
      }
});

export default sequelize;