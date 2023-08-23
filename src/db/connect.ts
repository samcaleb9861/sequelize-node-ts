import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres','postgres','1234',{
    host:'127.0.0.1',
    dialect:'postgres',
    logging:false,
});

export default sequelize;