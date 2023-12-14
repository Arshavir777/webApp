import { sequelize, Sequelize } from '../db/database';

export const JOB_STATUS = {
  PENDING: 'pending',
  DONE: 'done',
  FAILED: 'failed',
  IN_PROGRESS: 'in_progress'
}

const Job = sequelize.define('jobs', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    default: JOB_STATUS.PENDING,
    allowNull: true,
  },
});

export default Job;
