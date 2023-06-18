const mongoose = require('mongoose')
const tweetSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true

        },

        date: {
            type: String,
            required: true
        }
    }
)

const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet

