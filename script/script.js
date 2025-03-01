document.getElementById("discover-some-thing").addEventListener('click',
    function(event) {
        window.location.href = "./qus.html";
    })
// card 1
document.getElementById("card-1").addEventListener('click', function(event) {
    event.preventDefault();
        this.style.backgroundColor = "gray";
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
    });
    // card 2
    document.getElementById("card-2").addEventListener('click', function(event) {
        event.preventDefault();
            this.style.backgroundColor = "gray";
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
        });
// card 3
document.getElementById("card-3").addEventListener('click', function(event) {
    event.preventDefault();
        this.style.backgroundColor = "gray";
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
    });
document.getElementById("card-4").addEventListener('click', function(event) {
        event.preventDefault();
            this.style.backgroundColor = "gray";
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
        });
// card 5
document.getElementById("card-5").addEventListener('click', function(event) {
    event.preventDefault();
        this.style.backgroundColor = "gray";
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
    });
// card 6
document.getElementById("card-6").addEventListener('click', function(event) {
    event.preventDefault();
        this.style.backgroundColor = "gray";
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
    });