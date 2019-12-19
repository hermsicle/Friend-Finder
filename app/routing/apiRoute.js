const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Our Server Has Been Hit!')
})






module.exports = router;