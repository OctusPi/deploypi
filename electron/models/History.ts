import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const History = sequelize.define('History', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    project: DataTypes.BIGINT,
    work: DataTypes.BIGINT
});

export default History