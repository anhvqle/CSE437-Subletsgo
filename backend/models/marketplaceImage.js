const Sequelize = require('sequelize');
const sequelize = require("../database/database");
const Marketplace = require("./marketplace")

const MarketplaceImage = sequelize.define("marketplace-image", {
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

module.exports = MarketplaceImage