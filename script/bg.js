document.getElementById("theme-button").addEventListener('click', function(event) {
    event.preventDefault();

    // Generate a random color
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Change the background color of the entire website
    document.body.style.backgroundColor = randomColor;
});
