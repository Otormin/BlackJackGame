
---

# ♠️ Blackjack 

A dynamic, browser-based Blackjack game built with Vanilla JavaScript. This project goes beyond simple card drawing by implementing a **virtual betting system** and **data persistence**, allowing players to track their chip count across different sessions.

## 📖 Overview

This application simulates the classic casino game "21". Users start with a bankroll, place bets, and attempt to beat the dealer (or the logic) by getting a card sum as close to 21 as possible without going over.

## 📸 Screenshots
![Homepage](screenshots/blackjack1.png)
![How to play page](screenshots/blackjack2.png)
![gameplay page](screenshots/blackjack3.png) 

## ✨ Key Features

* **Persistent Player Data:** Uses `localStorage` to save the player's name and current chip count. If you refresh the page, your money is still there!
* **Betting System:**
* Players must place a valid bet (minimum 10 chips) before starting.
* **Win (Blackjack):** You earn double your bet amount.
* **Lose (Bust):** The bet amount is deducted from your total.


* **Game Over State:** If a player's chips drop below 10, the game restricts further play until reset.
* **Card Logic:**
* **Ace:** Valued at 11.
* **Face Cards (K, Q, J):** Valued at 10.
* **Number Cards:** Face value.



## 🕹️ How to Play

1. **Enter your Bet:** Input the amount of chips you want to wager in the "Amount" field.
2. **Start Game:** Click start to receive your first two cards.
3. **Analyze the Sum:**
* **Sum < 21:** You are "Alive". You can choose to "Draw a new card".
* **Sum = 21:** Blackjack! You win immediately.
* **Sum > 21:** Bust! You lose the round and your bet.


4. **Quit:** Pressing quit redirects you to the home screen (saving your progress).

## 🛠️ Tech Stack

* **Language:** JavaScript (ES6)
* **Storage:** Web Storage API (LocalStorage)
* **Frontend:** HTML5, CSS3

## 🧠 Logic Highlight

The game relies on a `renderGame()` function that acts as the central state machine, checking conditions after every card draw:

```javascript
function renderGame() {
    // ... rendering cards logic ...

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
        // Payout Logic
    } else {
        message = "You lose!"
        isAlive = false
        // Deduction Logic
    }
}

```

## 🚀 Installation & Run

1. **Clone the repository:**
```bash
git clone https://github.com/Otormin/BlackJackGame.git

```


2. **Navigate to the folder:**
```bash
cd BlackJackGame

```


3. **Launch:**
Open `index.html` (or the entry file where the user logs in) in your browser.