const mongoose = require('mongoose')

const cardStack = new mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})



const CardStack = mongoose.model('CardStack', cardStack)

module.exports = CardStack

