import credentials from '../database/credentials';
import { Model, DataTypes, Sequelize } from 'sequelize';


const sequelize = new Sequelize(credentials);


class Project extends Model { }
Project.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Project',
    timestamps: true
})


export default Project
