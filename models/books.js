const mongoose = require("mongoose");
const path = require("path")

/* no longer needed with filepond */
//const coverImageBasePath = "uploads/bookCovers"

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
    coverImage: {
        type: Buffer, 
        required: true
    },
    coverImageType: {
        type: String, 
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
})

//no longer needed in this fashion: multer has been overcome by fileponder 
/* bookSchema.virtual("coverImagePath").get(function(){
    if (this.coverImageName != null) 
        // "/" means public folder, because it's the default static set 
        return path.join("/", coverImageBasePath, this.coverImageName)
})
 */

bookSchema.virtual("coverImagePath").get(function(){
    if (this.coverImage != null && this.coverImageType != null) {
        //console.log(`data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`)
        return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    }    
})

//module.exports = authorSchema.model('Author', authorSchema)
Book = mongoose.model('Book', bookSchema)

/* no longer needed with filepond */
//Book.coverImageBasePath = coverImageBasePath

module.exports = { Book }
//module.exports.coverImageBasePath = coverImageBasePath