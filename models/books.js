const mongoose = require("mongoose");
const path = require("path")
const coverImageBasePath = "uploads/bookCovers"

const bookSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    
    description: {
        type: String, 
    },
    
    publishDate: {
        type: Date, 
        required: true
    },
    pageCount: {
        type: Number, 
        required: true
    },
    created: {
        type: Date, 
        required: true,
        default: Date.now
    },
    /*
    coverImageType: {
        type: Buffer, 
        required: true
    },
    */    
    coverImageName: {
        type: String, 
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
})

bookSchema.virtual("coverImagePath").get(function(){
    if (this.coverImageName != null) 
        // "/" means public folder, because it's the default static set 
        return path.join("/", coverImageBasePath, this.coverImageName)
})


//module.exports = authorSchema.model('Author', authorSchema)
Book = mongoose.model('Book', bookSchema)
Book.coverImageBasePath = coverImageBasePath

module.exports = { Book }
//module.exports.coverImageBasePath = coverImageBasePath