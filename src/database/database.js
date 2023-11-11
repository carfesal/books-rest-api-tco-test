import { Sequelize } from "sequelize";

export const sequelize  = new Sequelize('books_db', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
})