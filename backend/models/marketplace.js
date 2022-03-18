const Sequelize = require('sequelize');
const sequelize = require("../database/database");
const User = require("./user")

const Marketplace = sequelize.define("marketplace", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    condition: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Marketplace.belongsTo(User);
module.exports = Marketplace