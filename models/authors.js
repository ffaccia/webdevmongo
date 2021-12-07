const mongoose = require("mongoose");
const authorSchema = mongoose.Schema({
    name: {
        type: String, required: true
    }
})

const characterSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
    role: {
        type: String, required: true
    }
})

//module.exports = authorSchema.model('Author', authorSchema)
Author = mongoose.model('Author', authorSchema)
Character = mongoose.model('Character', characterSchema)

module.exports = { Author, Character };
