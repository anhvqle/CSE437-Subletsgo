const Sequelize = require("sequelize");

const sequelize = new Sequelize("subletsgo", "admin", "12345678", {
  dialect: "mysql",
  host: "subletsgo.cs4gix5zgdf3.us-east-2.rds.amazonaws.com",
});

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
