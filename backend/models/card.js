const mongoose = require('mongoose')

const card = new mongoose.Schema({
    title: {type: String, required: true,},
    hint: {type: String},
    answer: {type: String, required: true},
    studied: {type: Boolean, default: false},
    stack: {type: mongoose.Schema.Types.ObjectId,
        ref: 'CardStack'}
})

const Card = mongoose.model('Card', card)

module.exports = Card
