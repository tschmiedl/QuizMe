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

// Create New Card - Works in Postman
router.put('/:stackid/', isAuthenticated, async (req,res) => {
    const createdCard =  await db.CardStack.findByIdAndUpdate(req.params.stackid,
        { $push: { cards: req.body}}, {new:true}
        )
    res.json(createdCard)
 })

// Update one card in a stack
router.put('/:stackid/:cardid', isAuthenticated, async (req,res) => {
    // console.log(req.body)
    const stack = await db.CardStack.findById(req.params.stackid)
    const cardToUpdate = stack.cards.id(req.params.cardid)
    cardToUpdate.title = req.body.title
    cardToUpdate.hint = req.body.hint
    cardToUpdate.answer = req.body.answer
    cardToUpdate.save()
    res.json(stack)
})

router.delete('/:stackid/:cardid', isAuthenticated, async (req, res) => {
    const stack = await db.CardStack.findById(req.params.stackid)
    console.log(stack)
    const cardToDelete = stack.cards.id(req.params.cardid)
    const index = stack.cards.indexOf(cardToDelete)
    console.log(index)
    stack.cards.splice(index, 1)
    stack.save()
    res.json(stack)
})


 module.exports = router;
 