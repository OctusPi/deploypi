import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const History = sequelize.define('History', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    project: DataTypes.BIGINT,
    work: DataTypes.BIGINT,
    log: DataTypes.TEXT
});

export default History