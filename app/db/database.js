import Sequelize from 'sequelize';
import { appConfig } from '../config';

const sequelize = new Sequelize(appConfig.dbUrl, {logging: false});

export { sequelize, Sequelize };
