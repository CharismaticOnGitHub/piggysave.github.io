let userAmount = document.getElementById("user-amount");
let minus = document.getElementById("minus");
let add = document.getElementById("add");
let piggy = document.getElementById("real-piggy")
let currentPiggySize = window.getComputedStyle(document.getElementById("real-piggy")).fontSize;
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