$(document).ready(function () {
    //submitForm();
})
$('#submit').on('click', function (e) {
    e.preventDefault();

    //Check to see if the form is valid
    let valid = true;
    let name = $('#name').val();
    let image = $('#image-link').val();
    let formData = [];
    //console.log(formData)

    let formVals = $('form').serializeArray()
    for (let i = 0; i < formVals.length; i++) {
        //console.log(formVals[i].value)
        formData.push(formVals[i].value)
    }
    // console.log(formData)

    if (name === "" || image === "") {
        valid = false;
    } else if (formData === "") {
        valid = false;
    }

    if (valid === true) {
        let newUser = {
            name: name,
            photo: image,
            scores: formData
        };

        let currentURL = window.location.origin;

        // Ajax call for receiving response after POST req
        $.post(currentURL + "/api/friends", newUser, function (data) {
            $("#bestFriend").text(data.friends.name);
            $("#bestFriendPhoto").attr("src", data.friends.photo);
            $("#bestFriendModal").modal("toggle");
        });
    } else {
        // If a required field is missing, show alert
        alert("Survey is incomplete!");

    }
})

//create a function that shows user information:
