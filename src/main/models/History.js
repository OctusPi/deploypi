import credentials from '../database/credentials';
import { Model, DataTypes, Sequelize } from 'sequelize';


const sequelize = new Sequelize(credentials);

class History extends Model { }

History.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    project: DataTypes.BIGINT,
    work: DataTypes.BIGINT,
    log: DataTypes.TEXT,
    status: DataTypes.ENUM('success', 'error', 'aborted')
}, {
    sequelize,
    modelName: 'History',
    timestamps: true
})

export default History
