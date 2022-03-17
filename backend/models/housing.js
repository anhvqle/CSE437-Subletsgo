const Sequelize = require('sequelize');
const sequelize = require("../database/database");
const User = require("./user")

const Housing = sequelize.define("housings", {
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
    numBed: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    numBath: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    airConditioner: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    laundry: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    balcony: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    petFriendly: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    elevator: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
});

Housing.belongsTo(User);
module.exports = Housing