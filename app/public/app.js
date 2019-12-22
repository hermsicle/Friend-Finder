$(document).ready(function () {
    //submitForm();
})
$('#submit').on('click', function (e) {
    e.preventDefault();
    let name = $('#name').val();
    let image = $('#image-link').val();
    let formData = [];
    //console.log(formData)

    let formVals = $('form').serializeArray()
    for (let i = 0; i < formVals.length; i++) {
        //console.log(formVals[i].value)
        formData.push(formVals[i].value = 1)
    }
    console.log(formData)

    const newUser = {
        name: name,
        photo: image,
        scores: formData
    }
    console.log(newUser)

    $.ajax({
        type: 'POST',
        url: '/api/friends',
        data: newUser
    }).then(res => {
        console.log(res);

    })
})

//create a function that shows user information:
