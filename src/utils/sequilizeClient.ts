import { Sequelize } from 'sequelize';

const {
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
} = process.env;

// @ts-ignore
export default new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    host: DATABASE_HOST,
    dialect: 'postgres', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
