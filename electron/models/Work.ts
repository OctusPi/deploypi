import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

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
    parkey: DataTypes.STRING,
    source: DataTypes.STRING,
    target: DataTypes.STRING,
    exclude:DataTypes.TEXT,
    routines: DataTypes.TEXT
    
});

export default Work