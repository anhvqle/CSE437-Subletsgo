const Sequelize = require('sequelize');
const sequelize = require("../database/database");
const Housing = require("./housing")

const HousingImage = sequelize.define("housing-image", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    order: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    etag: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    key: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bucket: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

HousingImage.belongsTo(Housing);
module.exports = HousingImage