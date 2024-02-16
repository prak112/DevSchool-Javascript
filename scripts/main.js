// initialize player status
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;

// initialize characters
let fighting;
let monsterHealth;

// initialize weapon inventory
let inventory = ["stick",];

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

const weapons = [
    { name:"stick", power: 5 },
    { name:"dagger", power: 25 },
    { name:"claw hammer", power: 50 },
    { name:"sword", power: 100 },
]

const monsters = [
    { name: "slime", level: 2, health: 15 },
    { name: "fanged beast", level: 8, health: 60},
    { name: "dragon", level: 20, health: 300 }
]

const locations = [
    {
        name: "town square",
        "button text": ["Go to Store", "Go to Cave", "Fight Dragon"],
        "button functions": [goToStore, goToCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\".\nIn the far end, you see the \"Cave\". Behind you, you see the \"Dragon\".\nWhat will you do?",
    },
    {
        name: "store",
        "button text": ["Buy 10 Health (10 Gold)", "Buy Weapon (30 Gold)", "Go to Town Square"],
        "button functions": [buyHealth, buyWeapon, goTownSquare],
        text: "\"Welcome to the store. What would you like to buy?\"",
    },
    {
        name: "cave",
        "button text": ["Fight Slime", "Fight Beast", "Go to Town Square"],
        "button functions": [fightSlime, fightBeast, goTownSquare],
        text: "You've entered the cave. You see some monsters.",
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTownSquare],
        text: "You are fighting a monster.",
    },
    {
        name: "kill monster",
        "button text": ["Go to TownSquare", "Go to TownSquare", "Go to TownSquare"],
        "button functions": [goTownSquare, goTownSquare, goTownSquare],
        text: 'The monster screams "Arg!" as it dies. You gain XP and find gold.',
    },
    {
        name: "dead",
        "button text": ["RESPAWN ?", "REPLAY ?", "RESTART ?"],
        "button functions": [restart, restart, restart],
        text: "You are D-E-A-D!  &#x2620;",  // death emoticon
    },
    {
        name: "kill boss",
        "button text": ["RESPAWN ?", "REPLAY ?", "RESTART ?"],
        "button functions": [restart, restart, restart],
        text: "You DEFEATED the Mighty Dragon.. 0_O O_o o_o ... You won the RPG! &#x1F389;"
    }
]


// initialize buttons
button1.onclick = goToStore;
button2.onclick = goToCave;
button3.onclick = fightDragon;


// functions for character movement
function update(location) {
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerHTML = location.text;
    text.innerText += "\n\n Inventory : " + inventory;
}

function goTownSquare() {
    update(locations[0]);
}

function goToStore() {
    update(locations[1]);
}


// functions for character inventory
function buyHealth() {
    if (gold < 10) {
        text.innerText = "You do not have enough gold to buy health.";
    }
    else{
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
        text.innerText = "Your bought 10 health.";
    }
}

function buyWeapon() {
    if(currentWeapon < weapons.length - 1){
        if (gold < 30) {
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
        else{
            gold -= 30;
            currentWeapon++;
            let newWeapon = weapons[currentWeapon].name;
            goldText.innerText = gold;
            inventory.push(newWeapon);
            text.innerText = "You bought a " + newWeapon + ".";
            text.innerText += "\n\n Inventory : " + inventory;
        }
    }
    else{
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon() {
    if (inventory.length > 1){
        gold += 15;
        goldText.innerText = gold;
        currentWeapon = inventory.shift();
        text.innerText = "You have sold " + currentWeapon + "."
        text.innerText += "\n\n Inventory : " + inventory;
    }
    else{
        text.innerText = "You cannot sell your only weapon. You will be dead!";
    }        
}


// functions for combat
function goToCave() {
    update(locations[2]);
}

function fightSlime() {
    fighting = 0;
    goFight();    
}

function fightBeast() {
    fighting = 1;
    goFight();
}

function fightDragon() {
    fighting = 2;
    goFight();
}

// !! RANDOMIZE Combat Actions and Rewards !! //


function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";   
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function attack() {
    text.innerText = "You attack " + monsters[fighting].name + " with your " + weapons[currentWeapon].name + " !";
    text.innerText += "\nThe " + monsters[fighting].name + " attacks you with its might !"
    health -= monsters[fighting].level;
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 2;
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0){
        playerDead();
    }
    else if (monsterHealth <= 0){
        if(fighting === 2){
            winGame();
        }
        else{
            winBattle();
        }
    }
}

function dodge() {
    text.innerText = "You dodge the monster's attack like a ninja!";
}

function loseBattle() {
    update(locations[5]);
}

function winBattle() {
    rewardGold = Math.floor(monsters[fighting].level * 7.7);
    gold += rewardGold;
    rewardXp = monsters[fighting].level;
    xp += rewardXp;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
//    text.innerText = "You defeated the " + monsters[fighting].name + " and gained " + rewardGold + "gold" & + rewardXp + "XP !";
}

function playerDead() {
    update(locations[5]);
}

function winGame(){
    update(locations[6]);
}

function restart() {
    xp = 0;
    gold = 50;
    health = 100;
    currentWeapon = 0;
    inventory = ["stick",];
    xpText.innerText = xp;
    goldText.innerText = gold;
    healthText.innerText = health;
    goTownSquare();
}