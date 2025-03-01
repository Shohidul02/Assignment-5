document.getElementById("card-1").addEventListener('click',
    function(event){
        event.preventDefault();
        const historyContainer=document.getElementById("history-container");
        let title1 = document.getElementById("title-1").innerText;
        let now = new Date();
        let dateFormate = today.toDateString();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert to 12-hour format
        const p=document.createElement("p");
            p.innerText = `
            You have completed the task ${title1} at ${dateFormate} ${hours}:${minutes} ${amPm}
            `
            historyContainer.appendChild(p);

    }
)
// card 2
document.getElementById("card-2").addEventListener('click',
    function(event){
        event.preventDefault();
        const historyContainer=document.getElementById("history-container");
        let title2 = document.getElementById("title-2").innerText;
        let now = new Date();
        let dateFormate = today.toDateString();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert to 12-hour format
        const p=document.createElement("p");
            p.innerText = `
            You have completed the task ${title2} at ${dateFormate} ${hours}:${minutes} ${amPm}
            `
            historyContainer.appendChild(p);

    }
)
// card 3
document.getElementById("card-3").addEventListener('click',
    function(event){
        event.preventDefault();
        const historyContainer=document.getElementById("history-container");
        let title3 = document.getElementById("title-3").innerText;
        let now = new Date();
        let dateFormate = today.toDateString();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert to 12-hour format
        const p=document.createElement("p");
            p.innerText = `
            You have completed the task ${title3} at ${dateFormate} ${hours}:${minutes} ${amPm}
            `
            historyContainer.appendChild(p);

    }
)
// card 4
document.getElementById("card-4").addEventListener('click',
    function(event){
        event.preventDefault();
        const historyContainer=document.getElementById("history-container");
        let title4 = document.getElementById("title-4").innerText;
        let now = new Date();
        let dateFormate = today.toDateString();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert to 12-hour format
        const p=document.createElement("p");
            p.innerText = `
            You have completed the task ${title4} at ${dateFormate} ${hours}:${minutes} ${amPm}
            `
            historyContainer.appendChild(p);

    }
)
// card 5
document.getElementById("card-5").addEventListener('click',
    function(event){
        event.preventDefault();
        const historyContainer=document.getElementById("history-container");
        let title5 = document.getElementById("title-5").innerText;
        let now = new Date();
        let dateFormate = today.toDateString();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert to 12-hour format
        const p=document.createElement("p");
            p.innerText = `
            You have completed the task ${title5} at ${dateFormate} ${hours}:${minutes} ${amPm}
            `
            historyContainer.appendChild(p);

    }
)
// card 6
document.getElementById("card-6").addEventListener('click',
    function(event){
        event.preventDefault();
        const historyContainer=document.getElementById("history-container");
        let title6 = document.getElementById("title-6").innerText;
        let now = new Date();
        let dateFormate = today.toDateString();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert to 12-hour format
        const p=document.createElement("p");
            p.innerText = `
            You have completed the task ${title6} at ${dateFormate} ${hours}:${minutes} ${amPm}
            `
            historyContainer.appendChild(p);

    }
)