const express = require("express")
const router = express.Router()

/* "index" inside views folder */
router.get("/", (req, res) => {
    res.render('index')
})

module.exports = router