const express = require('express');
const router = express.Router();
const path = require('path');

//Connecting the PATH way to our home.html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"))
})

//Connecting the PATH way to our suvery.html file
router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})




module.exports = router;