const mongoose = require('mongoose')

const card = new mongoose.Schema({
    title: {type: String, required: true,},
    hint: {type: String},
    answer: {type: String, required: true},
    studied: {type: Boolean, default: false},
})

const cardStack = new mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String},
    cards: [card],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})



const CardStack = mongoose.model('CardStack', cardStack)

module.exports = CardStack

