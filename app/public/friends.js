$(document).ready(function () {
    submitForm();
})

submitForm = () => {
    $('#submit').on('click', function () {
        let name = $('#name').val();
        let image = $('#image-link').val();
        let formData = [];
        //console.log(formData)

        let formVals = $('form').serializeArray()
        for (let i = 0; i < formVals.length; i++) {
            //console.log(formVals[i].value)
            formData.push(formVals[i].value)
        }

        const newUser = {
            name: name,
            photo: image,
            scores: formData
        }
        console.log(newUser)

    })
}


