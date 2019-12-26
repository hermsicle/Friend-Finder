const express = require('express');
const router = express.Router();
//Export our friends list from our friends.js file
const db = require('../data/friends');


//uses the GET method to retrieve data from our API
router.get('/friends', (req, res) => {
    // console.log('Our Server has been hit!')
    res.send(db)
})

router.post('/friends', (req, res) => {
    //newUser is what is submitted on the form 
    let newUser = req.body;
    //console.log(newUser);

    //parseInt for the scores
    for (let i = 0; i < newUser.scores.length; i++) {
        newUser.scores[i] = parseInt(newUser.scores[i])
        console.log(newUser.scores[i])
    }

    //Default friend match is the first friend but the result will be whoever has the minimum differences in scores
    let bestFriendIndex = 0;
    let minimumDifference = 40;

    //Create a loop that starts off with 0 difference and compare the user with the friends list, one score at a time
    //Whatever the difference is, add to the total difference
    for (let i = 0; i < db.friends.length; i++) {
        let totalDifference = 0;
        for (let j = 0; db.friends[i].scores.length; j++) {
            let difference = Math.abs(newUser.scores[j] - db.friends[i].scores[j]);
            totalDifference += difference;
        }

        //If there is a new minimum, change the bestfriend index and set a new minimum for next iteration comparisions
        if (totalDifference < minimumDifference) {
            bestFriendIndex = i;
            minimumDifference = totalDifference;
        }
    }

    //After finding the match, add user to friend array
    db.friends.push(newUser);

    res.send(db.friends[bestFriendIndex])
})







module.exports = router;