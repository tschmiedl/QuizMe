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

// Get Users CardStacks
router.get('/:userId', isAuthenticated, async (req,res) => {
    const foundStacks = await db.CardStack.find({user: req.params.userId})
    res.json(foundStacks)
})

// Get Cards in certain stack - Works in Postman
router.get('/:stackid/', isAuthenticated, async (req,res) => {
    const foundStack = await db.CardStack.findById(req.params.stackid).populate('cards')
    res.json(foundStack)
})

// Create New Card Stack - Works in Postman
router.post('/', isAuthenticated, async (req,res) => {
    const createdStack = await db.CardStack.create(req.body)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    createdStack.user = decoded.id 
    createdStack.save()
    res.json(createdStack)
})

// Delete Card Stack and Associated Cards - Works in Postman
router.delete('/:stackid', isAuthenticated, async (req,res) => {
    await db.CardStack.findByIdAndDelete(req.params.stackid)
    res.sendStatus(200)
})



module.exports = router;