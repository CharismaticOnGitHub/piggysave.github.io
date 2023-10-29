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


// piggy.html
//TODO add if null just in case

let userAmount = document.getElementById("user-amount");
let minus = document.getElementById("minus");
let add = document.getElementById("add");
let piggy = document.getElementById("real-piggy")
let currentPiggySize = window.getComputedStyle(piggy).fontSize;
let userSaveTime = sessionStorage.getItem('userTime')
let userSavingGoal = sessionStorage.getItem('userGoal')

let piggySize = userSaveTime / 15;

document.addEventListener("DOMContentLoaded", function(){
    console.log(userSaveTime);
    console.log(userSavingGoal);
    minus.addEventListener("click", function(){
        if (userSaveTime !== 0){
            piggy.style.fontSize = (currentPiggySize - piggySize) + "rem";
        }
    });
    add.addEventListener("click", function(){
        if (userSavingGoal !== 0){
            piggy.style.fontSize = (currentPiggySize + piggySize) + "rem";
        }
    })
});