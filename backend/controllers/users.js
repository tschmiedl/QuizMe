const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')

function isAuthenticated(req, res, next){
    if(req.headers.authorization){
        next()
    } else {
        res.sendStatus(401)
    }
}

router.post('/signup', async (req, res) => {
    const foundUser = await db.User.findOne({ username: req.body.username})
    if(!foundUser){
        // If User is not found, user is created
        const createdUser = await db.User.create(req.body)
        // Creates token that is associated with specific user
        const payload = {id: createdUser._id}
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            user: createdUser,
            token: token
        })
    } else {
        res.sendStatus(401)
    
    }})

  
router.post('/login', async (req, res) => {
    const foundUser = await db.User.findOne({ username: req.body.username})
    if(req.body.password === foundUser.password){
        const payload = {id: foundUser._id}
        const token = jwt.encode(payload, config.jwtSecret)
        const userProducts = await db.Product.find({ user: foundUser._id })
        res.json({
            user: foundUser,
            token: token,
            products: userProducts
        })
    } else {
        res.sendStatus(401)
    }
})

router.get('/token', isAuthenticated, async (req, res) => {
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    // Find user by the decoded token ID we established when logging in / signing up
    const foundUser = await db.User.findById(decoded.id)
    // Find the products linked to the user by the ID of that user
    const userProducts = await db.Product.find({ user: foundUser._id })
    res.json({
        user: foundUser,
        products: userProducts
    })
})


module.exports = router;