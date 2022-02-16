const Sequelize = require('sequelize');

const sequelize = new Sequelize("subletsgo", "root", "helloVN84", {
    dialect: "mysql",
    host: "localhost",
})

module.exports = sequelize;