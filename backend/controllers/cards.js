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

// Get Cards in certain stack - Works in Postman
router.get('/:stackid/', isAuthenticated, async (req,res) => {
    const foundStack = await db.CardStack.findById(req.params.stackid)
    const cards = await db.Card.find({stack: foundStack._id})
    res.json(cards)
})

// Create New Card - Works in Postman
router.post('/:stackid/', isAuthenticated, async (req,res) => {
    const createdCard =  await db.Card.create(req.body)
    const stackId = req.params.stackid
    createdCard.stack = stackId
    createdCard.save()
    res.json(createdCard)
 })

//  Update one card 
router.put('/:cardid', isAuthenticated, async (req,res) => {
    const updatedCard = await db.Card.findByIdAndUpdate(req.params.cardid,
        req.body, {new:true})
    res.json(updatedCard)
})


 module.exports = router;
 