import {DataTypes,Model,Optional} from 'sequelize';
import sequelize from '../db/connect';
import Order from './orderModel'

interface UserAttributes{
    id:number;
    username:string;
    email:string;
}

interface UserCreationAttributes extends Optional<UserAttributes,'id'>{}

class User extends Model<UserAttributes,UserCreationAttributes> implements UserAttributes{
    public id!:number;
    public username!:string;
    public email!:string;
    public readonly orders?: Order[];
}
User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false, 
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
        },
        {
            sequelize,
            tableName: 'users',
            modelName: 'User',
        }
);
User.hasMany(Order,{foreignKey:'userId'})

export default User;
