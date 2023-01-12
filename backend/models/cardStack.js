const mongoose = require('mongoose')
const cardSchema = require('./card')

const cardStack = new mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cards: [cardSchema]
})



const CardStack = mongoose.model('CardStack', cardStack)

module.exports = CardStack

