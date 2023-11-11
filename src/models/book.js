import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';
import { Loan } from './loan.js';

export const Book = sequelize.define("book", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    },    
    isbn: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    publish_date: {
        type: DataTypes.DATEONLY,
    },
    available_amount: {
        type: DataTypes.INTEGER,
        defaultValue: 1,    
    },
}, 
{
    timestamps: false,
});

Book.hasMany(Loan, {foreignKey: 'book_id', sourceKey: 'id'});
Loan.belongsTo(Book, {foreignKey: 'book_id', targetId: 'id'});