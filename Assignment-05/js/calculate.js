const inputFieldPerPlayer = document.getElementById("input-per-player");
const playersTotalCost = document.getElementById("players-total-cost");
const palyersCostButton = document.getElementById("palyers-cost-btn");

const managerField = document.getElementById("manager-cost-field")
const coachField = document.getElementById("coach-cost-field")
const totalCostBtn = document.getElementById("total-btn")
const showTotalCost = document.getElementById("total")


const playersCost= function(){
    const playersCost = parseFloat(inputFieldPerPlayer.value) * 5;
    if(isNaN(playersCost)){
        alert("Please give valid input")
        return;
    }
    playersTotalCost.innerText = '$ ' + playersCost;
}

const totalResut = function(){
    const managerCost = parseFloat(managerField.value)
    const coachCost = parseFloat(coachField.value)
    const prevPlayersCost = parseFloat(inputFieldPerPlayer.value) * 5;
    if(isNaN(coachCost)){
        alert("Please give valid input")
        return;
    }
    if(isNaN(managerCost)){
        alert("Please give valid input")
        return;
    }
    if(isNaN(prevPlayersCost)){
        alert("Please give valid input")
        return; 
    }
    const totalCost = managerCost + coachCost + prevPlayersCost
    showTotalCost.innerText = '$ ' + totalCost
}

palyersCostButton.addEventListener('click',playersCost)
totalCostBtn.addEventListener('click',totalResut)