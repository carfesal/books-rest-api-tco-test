import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';
import { Book } from './book.js';

export const Author = sequelize.define("author", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    biography: {
        type: DataTypes.TEXT,
    },
    birth_date: {
        type: DataTypes.DATEONLY,
    },    
}, {
    timestamps: false,
});

Author.hasMany(Book, {foreignKey: 'author_id', sourceKey: 'id'});

Book.belongsTo(Author, {foreignKey: 'author_id', targetId: 'id'});