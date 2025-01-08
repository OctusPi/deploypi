import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Project = sequelize.define('Project', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
});

export default Project