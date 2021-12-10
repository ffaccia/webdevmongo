const { closeDelimiter } = require("ejs")
const express = require("express")
const path = require("path")
const fs = require("fs")
const router = express.Router()
const { Author, Character } = require("../models/authors")
const { Book } = require("../models/books")

const multer = require("multer")
const uploadPath = path.join("public", Book.coverImageBasePath )
const imageMimeTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']
const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) => {
        exts = imageMimeTypes.map(el => el.split("/")[1])
        
        //extension after the dot
        const ext = path.extname(file.originalname).toLowerCase().slice(1);
        
        var typeArray = file.mimetype.split('/');
        const fileType = typeArray[1];
        const mimeArray = typeArray.join('/')
        
        /*
        console.log("fille ", file)
        console.log(mimeArray)
        console.log(exts)
        console.log(ext)
        console.log("ima ",imageMimeTypes.includes(mimeArray))
        console.log("exts ", exts.includes(ext))
        */
        callback(null, imageMimeTypes.includes(mimeArray) && exts.includes(ext))
    }
})

function isEmpty(s) {
    if (s === undefined) s = ""
    return s.trimRight() === ""
}

function isFilled(s) {
    return !isEmpty(s)
}

/* route to get all authors, it becomes /authors/ because routes from authors.js
   are prepnded with /authors  
  
   <li><a href="authors">Authors</a></li>
   
   so becomes /authors
*/

router.get('/',  async (req, res) => {
    let query = Book.find()
    if (isFilled(req.query.title))
        query = query.regex("title", new RegExp(req.query.title, 'i'))
        
    if (isFilled(req.query.publishedAfter))
        query = query.gte("publishDate",req.query.publishedAfter)
        
    if (isFilled(req.query.publishedBefore))
        query = query.gte("publishDate",req.query.publishedBefore)
        
    try {
        const books = await query.exec()
        res.render("books/index", {
            books: books,
            searchOptions: req.query
        })
    } catch (e) {
        console.log("xerror: ", e)
        res.redirect("/")
    }
})



/* route to get one author
   <li><a href="authors/new">New author</a></li>
   becomes /authors/new
*/
router.get('/new', async (req, res) => {
    renderNewPage(res, new Book())
})


/* route to create an author, becomes /authors (but POST) */
router.post('/', upload.single('cover'), async (req, res) => {
    const fileName = req.file != null ? req.file.filename : null 
    //console.error("filename vale ", req.body)
    //console.error("filename21 vale ", req.file)

    const book = new Book({
        title:          req.body.title,
        author:         req.body.author,
        description:    req.body.description,
        publishDate:    new Date(req.body.publishDate),
        pageCount:      req.body.pageCount,
        coverImageName: fileName
    })
    
    try {
        const newBook = await book.save()
        //res.redirect("/books/`${newBook.id}`")
        res.redirect("/books")
    } catch(e) {
        console.error(e)
        deleteFile(fileName) 
        renderNewPage(res, book, true)
    }
})


async function renderNewPage(res, book, hasError=false) {
    try {
        const authors = await Author.find({})
        const book = new Book()
        params = {
            authors: authors,
            book: book
        }
        if (hasError) 
            params.errorMessage = "Error creating new book!"
        res.render("books/new", params)

    } catch (e) {
        console.error(e)
        res.redirect("/books")
    }
}

function deleteFile(fileName) {
    fs.unlink(path.join(uploadPath, fileName), err => {
        if (err) console.log(`Error during unlink of ${fileName}`)
    })
}

module.exports = router