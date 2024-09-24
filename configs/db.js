const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bookstore', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require("../models/books.js")(db.sequelize, db.Sequelize)

module.exports = db;
