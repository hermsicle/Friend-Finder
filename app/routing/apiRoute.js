const express = require('express');
const router = express.Router();
const db = require('../data/friends');


//uses the GET method to retrieve data from our API
router.get('/friends', (req, res) => {
    // console.log('Our Server has been hit!')
    res.send(db)
})

router.post('/friends', (req, res) => {
    let newUser = req.body;
    //console.log(newUser);

    for (let i = 0; i < newUser.scores.length; i++) {

    }

    console.log(userScore)

    for (let i = 0; i < db.friends.length; i++) {
        //console.log(db.friends[i])
        // let userScores = db.friends[i].scores;
        // console.log(userScores);
        for (let j = 0; j < db.friends[i].scores.length; j++) {
            let newData = db.friends[i].scores[j];
            // console.log(newUser.scores);
            console.log(newData)
            console.log(newUser.scores)

        }
    }





    // console.log(db.friends[0].scores)


    db.friends.push(req.body);
    res.send(db)
})







module.exports = router;