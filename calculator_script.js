//calculator.html

let conversation = document.getElementsByClassName("conversation");
let sendBtn = document.getElementById("send-btn");
let userInput = document.getElementById("user-input");

let input = 0;
let savingGoal = 0;
let dailySave = 0;
let saveTime = 0;

document.addEventListener("DOMContentLoaded", function(){
    sendBtn.addEventListener("click", function(){
        send();
        console.log("SEnd!")
    });
    
    function send() {
        input++;
        inputValue = userInput.value; 
    
        if (input === 1) {
            savingGoal = parseFloat(inputValue); 
            botMessage("Please input the amount you will save daily");
            }
        if (input === 2) {
            dailySave = parseFloat(inputValue); 
            saveTime = savingGoal / dailySave;
            botMessage(`${saveTime} days is what you'll need to save $${savingGoal}. Good luck!`);
            }
    }
    
    function botMessage(message) {
        let div = document.createElement("DIV");
        div.innerHTML = message; 
        conversation[0].appendChild(div); 
    }

    sessionStorage.setItem('userTime', saveTime);
    sessionStorage.setItem('userGoal', savingGoal);
});

