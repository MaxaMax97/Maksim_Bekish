const games = document.createElement("div"); //Игра
games.id = "games";
const field = document.createElement("div"); //поле
field.id = "field";
const ball = document.createElement("div"); //мяч
ball.id = "ball";
const plauerOne = document.createElement("div"); // Играк 1
plauerOne.id = "plauerOne";
const plauerTwo = document.createElement("div"); // Игрок 2
plauerTwo.id = "plauerTwo";

document.body.append(games)
games.append(field,ball,plauerOne,plauerTwo)