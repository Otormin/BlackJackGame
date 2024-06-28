// Retrieve player data from local storage
let playerData = localStorage.getItem("playerData")
let player = JSON.parse(playerData)
let playerName = player.name
let playerChips = player.chips

// Function to save player data to local storage
function savePlayerData() {
    localStorage.setItem("playerData", JSON.stringify(player));
}

//creating an array
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let amount
let messageEl = document.getElementById("message-el")
//you can use this:  let sumEl = document.getElementById("sum-el") 
//orr
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


document.getElementById("AmountOfChipsForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve the amount from the input field
    amount = parseInt(document.getElementById("AmountInput").value);

if(!amount || amount <= 0){
    alert("Valid amount of chips starts from 10 chips.")
    return
}
else{
    
}
if(amount > player.chips){
    alert("Invalid amount of chips. You don't have enough chips.")
    return
}

});

function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber > 10) {
        return 10
    } 
    else if (randomNumber === 1) {
        return 11
    }else{
        return randomNumber
    }
}

function startGame(){
    if(!amount || amount <= 0){
        alert("Valid amount of chips starts from 10 chips.")
        return
    }
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame()
{
    //render out firstCard and secondCard
    cardsEl.textContent = "Cards: "

    // Create a for loop that renders out all the cards instead of just two
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ", "
    }

    sumEl.textContent = "Sum: " + sum

        if (sum <= 20)
    {
        message = "Do you want to draw a new card?"
        hasBlackjack = false
    }
    else if (sum === 21)
    {
        message = "You've got Blackjack!"
        hasBlackjack = true
    }
    else
    {
        message = "You lose!"
        isAlive = false
    }

    if(hasBlackjack === true){
        let finalAmount = (amount * 2) + player.chips
        player.chips = finalAmount
        playerEl.textContent = player.name + ": $" + finalAmount
        updatePlayerData();
    }

    if(isAlive === false){
        let finalAmount = player.chips - amount
        player.chips = finalAmount
        playerEl.textContent = player.name + ": $" + finalAmount
        updatePlayerData();
    }

    if(player.chips < 10){
        isAlive = false
        alert("Game over.")
        return;
    }

    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackjack === false)
    {
    let thirdCard = getRandomCard()
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
    }
}

function updatePlayerData() {
    savePlayerData();
}

function quitGame(){
    window.location.href = "index.html"
}