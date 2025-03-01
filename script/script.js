// current date
let today = new Date();
let dateFormate = today.toDateString();
document.getElementById("current-date").textContent = dateFormate;

// discover something page
document.getElementById("discover-some-thing").addEventListener('click', function(event) {
    window.location.href = "./qus.html";
});

let clickedCount = 0;
const totalCards = 6;

document.getElementById("card-1").addEventListener('click', handleCardClick);
document.getElementById("card-2").addEventListener('click', handleCardClick);
document.getElementById("card-3").addEventListener('click', handleCardClick);
document.getElementById("card-4").addEventListener('click', handleCardClick);
document.getElementById("card-5").addEventListener('click', handleCardClick);
document.getElementById("card-6").addEventListener('click', handleCardClick);

function handleCardClick(event) {
    event.preventDefault();
    alert("Board Update Successfully");

    let textAssign = document.getElementById("task-assign").innerText;
    let convertedTextAssign = parseInt(textAssign);

    let topValue = document.getElementById("top-value").innerText;
    let convertedTopValue = parseInt(topValue);
    let a = convertedTopValue + 1;
    document.getElementById("top-value").innerText = a;

    if (convertedTextAssign > 0) {
        let sum = convertedTextAssign - 1;
        document.getElementById("task-assign").innerHTML = sum;
    }

    this.style.pointerEvents = "none";
    this.style.opacity = "0.5";

    clickedCount++;
    if (clickedCount === totalCards) {
        alert("Congrats!! You have completed all the current tasks");
    }
}
