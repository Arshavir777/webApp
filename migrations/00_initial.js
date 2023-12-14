import { Sequelize } from 'sequelize';
import User from '../app/models/user.model';

async function up({ context: queryInterface }) {
    await queryInterface.createTable('users', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        balance: {
            type: Sequelize.FLOAT,
            default: 0,
            allowNull: false
        }
    });

    const user = await User.create({ balance: 10000 });
    console.log('New User ID:', user.id);

    await queryInterface.createTable('jobs', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: true
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: true
        }
    });
}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('jobs');
}

module.exports = { up, down };
