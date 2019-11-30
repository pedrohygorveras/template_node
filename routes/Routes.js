const express = require('express')
const router = express.Router()

// Routes

router.get('/', (req, res) => {
    res.render('landing_page', { title: 'Home' })
})

// Redirect
router.get('*', (req, res) => {
    res.redirect('/')
})

module.exports = router