import dotenv from 'dotenv';

dotenv.config();

export const env = {
    APP_PORT: process.env.APP_PORT || 3000,
    APP_NAME: process.env.APP_NAME || 'Books API',
    APP_HOST: process.env.APP_HOST || 'localhost',

    // DATABASE
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || 5432,
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD || 'postgres',
    DB_NAME: process.env.DB_NAME || 'books_db',
    DB_CONNECTION: process.env.DB_CONNECTION || 'postgres',
}