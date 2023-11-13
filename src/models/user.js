import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';
import { Loan } from './loan.js';

export const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    registered_date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
    }
}, {
    timestamps: false,
});

User.hasMany(Loan, {foreignKey: 'user_id', sourceKey: 'id', onDelete: 'CASCADE'});
Loan.belongsTo(User, {foreignKey: 'user_id', targetId: 'id'});