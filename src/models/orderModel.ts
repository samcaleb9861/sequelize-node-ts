import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connect";
import User from "./userModel";

interface OrderAttributes {
    id: number;
    orderName: string;
    content: string;
    userId:string;
}
class Order extends Model<OrderAttributes> implements OrderAttributes {
    public id!: number;
    public orderName!: string;
    public content!: string;
    public userId!:string;
    public readonly user?: User;
}
Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        orderName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: User,
              key: 'id',
            },
          },
        },
    {
        sequelize,
        tableName: 'orders', // Your table name in the database
        modelName: 'Order',
    }
);
Order.belongsTo(User, { foreignKey: 'userId' });

export default Order;