var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);  
    return value;
  };

 // function to set name
 
 var getPlayerName = function() {
    var name = "";  
  // ADD LOOP HERE WITH PROMPT AND CONDITION
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
        console.log("Your robot's name is " + name);
        return name;
};
// Player
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10
  };
// Robot
var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];

//Shop
//Health refill
 refillHealth = function(){
    if(this.playerInfo.money >= 7){
    window.alert("Refilling player's health by 20 for 7 dollars.")
    this.playerInfo.health += 20;
    this.playerInfo.money -= 7;
    }
    else{
        window.alert("You don't have enough money!")
    }
}
//Upgrade Attack
 upgradeAttack = function(){
    if(this.playerInfo.money >= 7){
    window.alert("Upgradeing player's attack by 6 for 7 dollars.")
    this.playerInfo.attack += 6;
    this.playerInfo.money -= 7;
    }
    else{
        window.alert("You don't have enough money!")
    }
};
// You can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
var fight = function (enemy.name) {
    while (playerInfo.health > 0 && enemy.health > 0) {
        // ask user if they'd liked to fight or run
        var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        // if user picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
                // subtract money from playerInfo.money for skipping
                playerInfo.money = playerInfo.money - 10;
                console.log("playerInfo.money", playerInfo.money)
                break;
            }
        }  
        // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died!');
            {
                // vist the store confirm
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                // if yes, take them to the store() function
                if (storeConfirm) {
                  shop();
                }
            // award player money for winning
            playerInfo.money = playerInfo.money + 20;

            // leave while() loop since enemy is dead
            }
        }
         else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }

        // remove players's health by subtracting the amount set in the enemy.attack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
            // leave while() loop if player is dead
            break;
        }
        else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
    }
}
// function to start a new game
var startGame = function() {

 for (var i = 0; i < enemyInfo.length; i++)
    // play again
      if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyObj = enemyInfo[i];
  
        pickedEnemyObj.health = randomNumber(40 ,60)
  
        fight(pickedEnemyObj);
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        
      }

      endGame();
    };

  var endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money+ ".");
    } 
    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
    // restart the game
        startGame();
    } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
      );

      switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.health.refillHealth();
        break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.attack.upgradeAttack();
        break;
    }
};

startGame();