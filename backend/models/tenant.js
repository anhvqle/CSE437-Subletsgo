const Sequelize = require('sequelize');
const sequelize = require("../database/database");

const Tenant = sequelize.define("tenant", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    occupation: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    company: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

module.exports = Tenant