// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
// access node packages
const express = require("express")
const app = express()

const cors = require("cors")
require("dotenv").config()
const bodyParser = require('body-parser')

const path = require("path")

// access models
const db = require("./models")

// access controllers
const cardCtrl = require("./controllers/cards.js")
const cardStackCtrl = require("./controllers/cardStacks.js")
const userCtrl = require('./controllers/users.js')



// +-+-+-+-+-+-+-+-+-+-+
// |M|I|D|D|L|E|W|A|R|E|
// +-+-+-+-+-+-+-+-+-+-+

// cors allows our frontend to communicate with the backend
app.use(cors())
// body parser: used for POST/PUT/PATCH routes: this will take incoming strings from the request body that are url encoded and parse them into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))

// Use controllers for all other routes
app.use("/stack", cardCtrl)
app.use("/stack", cardStackCtrl)
app.use('/users', userCtrl)

app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});

// +-+-+-+-+-+-+-+-+
// |L|I|S|T|E|N|E|R|
// +-+-+-+-+-+-+-+-+
// `app.listen()` binds and listens for the connections on the specified host and port
app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})