document.getElementById("blackjackForm").addEventListener("submit", function(event) {
    event.preventDefault()

    const playerName = document.getElementById("nameInput").value
    const playerChips = parseInt(document.getElementById("chipsInput").value)

    // Check if playerName or playerChips are null or empty
    if (!playerName || !playerChips) {
        alert("Please enter both name and chips.")
        return
    }

    if(playerChips <= 0){
        alert("Please enter a valid number of chips.")
        return
    }

    if(playerChips < 10){
        alert("The number of chips must be $10 or more.")
        return
    }

    let player = {
        name: playerName,
        chips: playerChips
    }

    // Storing player data in local storage
    localStorage.setItem("playerData", JSON.stringify(player))

    document.getElementById("nameInput").value = ""
    document.getElementById("chipsInput").value = ""

    //redirect when submit button is clicked
    window.location.href = "BlackJack.html"
})
