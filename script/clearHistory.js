document.addEventListener("DOMContentLoaded", function () {
    const historyContainer = document.getElementById("history-container");
    const clearButton = historyContainer.querySelector("button");

    clearButton.addEventListener("click", function () {
        const logs = historyContainer.querySelectorAll("p, div.history-item");
        logs.forEach(log => log.remove());
    });
});

