const express = require('express');
const router = express.Router();

//Create a constructor for each friend
function Friend(name, photo, scores = []) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
}

let friends = [
    new Friend('Ahmed', 'https://www.thispersondoesnotexist.com/', ["1", "2", "3", "4", "5", "5", "4", "3", "2", "1"]),
    new Friend('Jacob Deming', 'https://www.thispersondoesnotexist.com/', ["2", "5", "1", "2", "5", "5", "2", "1", "2", "3"]),
    new Friend('Jeremiah Scanlon', 'https://avatars2.githubusercontent.com/u/8504998?v=3&s=460', ["5", "2", "2", "5", "1", "2", "1", "4", "5", "2"]),
    new Friend('Luiz', 'https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg', ["2", "2", "5", "5", "5", "5", "1", "1", "2", "3"]),
    new Friend('Thomas', 'https://www.thispersondoesnotexist.com/', ["2", "5", "5", "3", "1", "5", "1", "1", "2", "3"])
]

//uses the GET method to retrieve data from our API
router.get('/', (req, res) => {
    console.log('Our Server has been hit!')
    res.send(friends)
})






module.exports = router;