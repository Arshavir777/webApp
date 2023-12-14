import { sequelize, Sequelize } from '../db/database';

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  balance: {
    type: Sequelize.FLOAT,
    default: 0,
    allowNull: false,
  },
}, { timestamps: false });

export default User;
