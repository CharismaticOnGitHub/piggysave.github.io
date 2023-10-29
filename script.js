//calculator.html

let conversation = document.getElementsByClassName("conversation");
let sendBtn = document.getElementById("send-btn");
let userInput = document.getElementById("user-input");

let input = 0;
let savingGoal = 0;
let dailySave = 0;
let saveTime = 0;

// let minus = document.getElementById("minus");
// let add = document.getElementById("add");
// let piggy = document.getElementById("real-piggy")
// let currentPiggySize = window.getComputedStyle(document.getElementById("real-piggy")).fontSize;

const smallIcon = document.getElementById("small-piggy");
const bigIcon = document.getElementById("big-piggy");
const addBtn = document.getElementById("add");
const clicksInput = document.getElementById("clicks-input");

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
            let piggyTimes = saveTime / 10;

            addBtn.addEventListener("click", () => {
                const clicks = parseInt(clicksInput.value, 10)
                const currentSize = parseInt(getComputedStyle(smallIcon).fontSize, 10);
                console.log(currentSize)

                if (currentSize < parseInt(getComputedStyle(bigIcon).fontSize, 10)){
                    const newSize = currentSize + clicks;
                    smallIcon.style.fontSize = newSize * piggyTimes + "px";
                };
            });
        }
    }
    
    function botMessage(message) {
        let div = document.createElement("DIV");
        div.innerHTML = message; 
        conversation[0].appendChild(div); 
    };
});
