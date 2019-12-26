//Create a constructor for each friend
function Friend(name, photo, scores = []) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
}

let friends = [
    new Friend('Ahmed', 'https://vignette3.wikia.nocookie.net/itsalwayssunny/images/5/5f/Mac_-_Season_8.jpg', [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]),
    new Friend('Jacob Deming', 'https://vignette3.wikia.nocookie.net/itsalwayssunny/images/5/5f/Mac_-_Season_8.jpg', [2, 5, 1, 2, 5, 5, 2, 1, 2, 3]),
    new Friend('Jeremiah Scanlon', 'https://vignette3.wikia.nocookie.net/itsalwayssunny/images/f/fe/Season_7_-_Frank.jpg', [5, 2, 2, 5, 1, 2, 1, 4, 5, 2]),
    new Friend('Luiz', 'https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg', [2, 2, 5, 5, 5, 5, 1, 1, 2, 3]),
    new Friend('Thomas', 'https://vignette2.wikia.nocookie.net/itsalwayssunny/images/f/f3/Square-Dee-Cheesy.jpg', [2, 5, 5, 3, 1, 5, 1, 1, 2, 3]),
    new Friend('Kandy', 'https://st3.depositphotos.com/14847044/18904/i/1600/depositphotos_189046116-stock-photo-sexy-girl.jpg', [1, 2, 1, 4, 5, 5, 4, 3, 5, 5]),
    new Friend('Foxy', 'https://st3.depositphotos.com/10131542/16061/i/1600/depositphotos_160613700-stock-photo-young-woman-in-green-bikini.jpg', [2, 5, 1, 2, 5, 5, 2, 1, 5, 5])
]



module.exports = {
    Friend: Friend,
    friends: friends
}


