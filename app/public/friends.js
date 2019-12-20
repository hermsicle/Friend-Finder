$(document).ready(function () {
    submitForm();
})

//Create a function that grabs all the values from input
submitForm = () => {
    $('#submit').on('click', function () {
        let name = $('#name').val();
        let image = $('#image-link').val();

        console.log(name, image)
    })
}
