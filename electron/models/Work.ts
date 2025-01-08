import { DataTypes } from 'sequelize';

import sequelize from '../database/connection';

const Work = sequelize.define('Work', {
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
    exclude:DataTypes.TEXT,
    routines: DataTypes.TEXT
    
});

export default Work