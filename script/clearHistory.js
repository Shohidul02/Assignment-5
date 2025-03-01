document.getElementById("history-clean").addEventListener('click',
    function(event){
        event.preventDefault();
        let historyContainer = document.getElementById("history-container")
        const clearButton = historyContainer.querySelector("button");
        const logs = historyContainer.querySelectorAll("p, div.history-item");
        logs.forEach(log => log.remove());
    }
)
