import credentials from '../database/credentials';
import { Model, DataTypes, Sequelize } from 'sequelize';


const sequelize = new Sequelize(credentials);

class Work extends Model { }

Work.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    host: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    privatekey: DataTypes.STRING,
    source: DataTypes.STRING,
    target: DataTypes.STRING,
    exclude: DataTypes.TEXT,
    routines: DataTypes.TEXT
}, {
    sequelize,
    modelName: 'Work',
    timestamps: true
})

export default Work
