import { Sequelize } from 'sequelize';

export default new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});