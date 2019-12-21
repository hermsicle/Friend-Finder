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
    new Friend('Thomas', 'https://www.thispersondoesnotexist.com/', ["2", "5", "5", "3", "1", "5", "1", "1", "2", "3"]),
    new Friend('Kandy', 'https://st3.depositphotos.com/14847044/18904/i/1600/depositphotos_189046116-stock-photo-sexy-girl.jpg', [["1", "2", "1", "4", "5", "5", "4", "3", "5", "5"]]),
    new Friend('Foxy', 'https://st3.depositphotos.com/10131542/16061/i/1600/depositphotos_160613700-stock-photo-young-woman-in-green-bikini.jpg', ["2", "5", "1", "2", "5", "5", "2", "1", "5", "5"])
]

//uses the GET method to retrieve data from our API
router.get('/friends', (req, res) => {
    // console.log('Our Server has been hit!')
    res.send(friends)
})

router.post('/friends', (req, res) => {
    //console.log('POST has been hit');
    friends.push(new Friend(req.body.name, req.body.photo, req.body.scores))
    res.send(friends)
})




module.exports = router;