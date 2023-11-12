import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';

export const Loan = sequelize.define("loan", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    loan_date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
    },
    return_date: {
        type: DataTypes.DATEONLY,
    },
}, {
    timestamps: false,
});