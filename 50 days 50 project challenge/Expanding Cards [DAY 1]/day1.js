let main = document.querySelectorAll('.image');


main.forEach(function (image) {
    image.addEventListener('click', function () {
        remove()
        image.classList.add('active')
    })
});

function remove() {
    main.forEach(function (image) {
        image.classList.remove('active')
    })
}



