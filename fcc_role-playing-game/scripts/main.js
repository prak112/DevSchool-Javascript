// initialize player status
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;

// initialize characters
let monsterHealth;

// initialize inventory
let inventory = ["stick"];

// declare game elements by ID
const button1 = document.getElementById("button1"); // or document.querySelector("#button1")
button1.onclick = goToStore;
const button2 = document.getElementById("button2");
button2.onclick = goToCave;
const button3 = document.getElementById("button3");
button3.onclick = fightDragon;
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const location = [
    {
        name: "town square",
        "button text": ["Go to Store", "Go to Cave", "Fight Dragon"],
        "button functions": [goToStore, goToCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"",
    },
    {
        name: "store",
        "button text": ["Buy 10 Health (10 Gold)", "Buy Weapon (30 Gold)", "Go to Town Square"],
        "button functions": [buyHealth, buyWeapon, goTownSquare],
        text: "\"Welcome to the store. What would you like to buy?\"",
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight bear", "Go to Town Square"],
        "button functions": [fightSlime, fightBeast, goTownSquare],
        text: "You've entered the cave. You see some monsters.",
    }
]


// functions for character movement
function update(location) {
    text.innerText = location.text;
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
}

function goTownSquare() {
    update(locations[0]);
}

function goToStore() {
    update(locations[1]);
}


// functions for character inventory
function buyHealth() {

}

function buyWeapon() {
    
}


// functions for combat
function goToCave() {
    console.log("Going to the cave...");
}

function fightSlime() {

}

function fightBeast() {

}



function fightDragon() {
    console.log("Fighting the dragon...");
}


