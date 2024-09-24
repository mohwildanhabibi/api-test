const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require("../models/books.js")(db.sequelize, db.Sequelize)

module.exports = db;
