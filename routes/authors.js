const { closeDelimiter } = require("ejs")
const express = require("express")
const router = express.Router()
const { Author, Character } = require("../models/authors")


/* route to get all authors, it becomes /authors/ because routes from authors.js
   are prepnded with /authors  
  
   <li><a href="authors">Authors</a></li>
   
   so becomes /authors
*/

router.get('/',  async (req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    const authors =  await Author.find(searchOptions)
    try {
        res.render('authors/index', {
            authors: authors,
            searchOptions: searchOptions
        })
    } catch {
        res.redirect("/")
    }
})


/* route to get one author
   <li><a href="authors/new">New author</a></li>
   becomes /authors/new
*/
router.get('/new', (req, res) => {
    res.render('authors/new', {author: new Author()})
})


/* route to create an author, becomes /authors (but POST) */
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body['name']
    })
    try {
        const newAuthor = await author.save()
        res.redirect(`authors/new`)
    } 
    catch {
        res.render("authors/new", {
            author: author,
            errorMessage: "Error creating author"
        })
    }    
    //console.log(req.body)
    //res.send("<h2>"+req.body['name']+ "<code>"+req.body['name'].toUpperCase()+"</code></h2>")
})


/*
router.post('/', (req, res) => {
    const author = new Author({
        name: req.body['name']
    })
    author.save((err, newAuthor) => {
        if (err) {
            res.render("authors/new", {
                author: author,
                errorMessage: "Error creating author"
            })
        } else {
            //res.redirect(`authors/${newAuthor.id}`)
            res.redirect('authors')
        }
    })
    console.log(req.body)
    res.send("<h2>"+req.body['name']+ "<code>"+req.body['name'].toUpperCase()+"</code></h2>")
})
*/


module.exports = router