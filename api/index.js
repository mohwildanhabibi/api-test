const express = require('express')
const app = express()
const port = 3000

const db = require("../configs/db.js")

db.sequelize.sync()
.then(() => {
  console.log("Synced db.");
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
});

// parse requests of content-type - application/json
app.use(express.json());

// Importing all the routes 
const homeroute = require("../routes/home.js")
const loginroute = require("../routes/login.js")
const booksroute = require("../routes/books.js")

app.use("/home",homeroute) 
app.use("/login",loginroute)
app.use("/books",booksroute)

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})