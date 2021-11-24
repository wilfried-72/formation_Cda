const mongoose = require('mongoose'),
Schema = mongoose.Schema

// Import model
const Post = require('./posts')

const UsersSchema = new Schema({
    pseudo : {
        type : String,
        required : true
    },

    likes: {
        type : Number,
        default : 0
    },

    createdDateIso : {
        type: Date,
        default: new Date()
    },

    createdDateTimestamp : {
        type: String,
        default: new Date().getTime()
    },

    updatedDateTimestamp : {
        type : String,
    },

    isSuspend: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model('Users', UsersSchema);
