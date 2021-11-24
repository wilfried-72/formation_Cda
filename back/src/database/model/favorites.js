const mongoose = require('mongoose'),
Schema = mongoose.Schema

const FavoritesSchema = new Schema({
    country: {
        type: String,
        required: true
    },

    lon: {
        type: Number,
    },

    lat: {
        type: Number,
    },

    createdDateIso: {
        type: Date,
        default: new Date()
    },

    createdDateTimestamp: {
        type: String,
        default: new Date().getTime()
    },

    updatedDateTimestamp: {
        type: String,
    },

    isSuspend: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model('Favorites', FavoritesSchema);