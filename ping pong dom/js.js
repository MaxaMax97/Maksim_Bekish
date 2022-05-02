const games = document.createElement("div"); //Игра
games.id = "games";
let counter = document.createElement("span"); // счет
counter.id = "counter";
let button = document.createElement("button"); // старт
button.id = "button";
button.innerHTML = "старт";
const times = document.createElement("div"); // таймер
times.id = "time";
const plauerOne = document.createElement("div"); // Играк 1
plauerOne.id = "plauerOne";
const plauerTwo = document.createElement("div"); // Игрок 2
plauerTwo.id = "plauerTwo";
plauerTwo.style.left = "585px";
let ball = document.createElement("img");
ball.id = "IBall";
ball.src = "https://pngicon.ru/file/uploads/1_1735-128x128.png";

document.body.append(counter, button, games);
games.append(plauerOne, plauerTwo, ball, times);
time.innerHTML = "3";
let arr = [4, 5, 6, -4, -5, -6];
let randomX = Math.floor(Math.random() * 6);
let randomY = Math.floor(Math.random() * 6);

button.addEventListener("click", pusk);
document.addEventListener("keydown", speedOne);
document.addEventListener("keydown", speedTwo);

let areaH = {
  width: 800,
  height: 550,
};

counter.style.width = areaH.width + "px";
counter.innerHTML = "0 : 0";

games.style.width = areaH.width + "px";
games.style.height = areaH.height + "px";

time.style.width = areaH.width + "px";

let countone = 0;
let counttwo = 0;
let gameover = 5;

let ballH = {
  width: 30,
  height: 30,
  speedX: arr[randomX],
  speedY: arr[randomY],
  posY: areaH.height / 2 - 15, //     160,
  posX: areaH.width / 2 - 15, //      285,
  update: function () {
    let ballElem = document.getElementById("IBall");
    ballElem.style.left = this.posX + "px";
    ballElem.style.top = this.posY + "px";
  },
};

let plOne = {
  width: 15,
  height: 100,
  speedDown: 10,
  speedUp: -10,
  posY: 0,
  run: function () {
    let one = document.getElementById("plauerOne");
    one.style.top = this.posY + "px";
  },
};

let plTwo = {
  width: 15,
  height: 100,
  speedDown: 10,
  speedUp: -10,
  posY: 0,
  posX: (plauerTwo.style.left = areaH.width - plOne.width + "px"),
  run: function () {
    let two = document.getElementById("plauerTwo");
    two.style.top = this.posY + "px";
  },
};

function start() {
  setInterval(tick, 40);
}

function tick() {
  let arr = [4, 6, -4, -6];
  let randomX = Math.floor(Math.random() * 4);
  let randomY = Math.floor(Math.random() * 4);

  counter.innerHTML = `${countone} : ${counttwo}`;

  if (counttwo == gameover || countone == gameover) {
    ballH.speedY = 0;
    ballH.speedX = 0;
    ballH.posY = areaH.height / 2 - ballH.height / 2; //160;
    ballH.posX = areaH.width / 2 - ballH.width / 2; //285;

    if (counttwo == gameover) {
      counter.innerHTML = "Победил левый";
    } else {
      counter.innerHTML = "Победил правый";
    }
  } else {
    ballH.posX += ballH.speedX;
  }

  if (ballH.posX + ballH.width > areaH.width) {
    //Правая стенка

    ballH.posX = areaH.width / 2 - ballH.width / 2; // 285;
    ballH.posY = areaH.height / 2 - ballH.height / 2; //160;
    ballH.speedX = 0;
    ballH.speedY = 0;

    counttwo++;
    if (ballH.speedX == 0) {
      coundDown();

      setTimeout(cod, 3000);
      function cod() {
        ballH.posX = areaH.width / 2 - ballH.width / 2; //285;

        ballH.posY = areaH.height / 2 - ballH.height / 2; //   160;
        ballH.speedX = arr[randomX];
        ballH.speedY = arr[randomY];
      }
    }
  }

  if (ballH.posX < 0) {
    //левая стенка

    ballH.posX = areaH.width / 2 - ballH.width / 2; //        285;

    ballH.posY = areaH.height / 2 - ballH.height / 2; //        160;
    ballH.speedX = 0;
    ballH.speedY = 0;
    countone++;
    if (ballH.speedX == 0) {
      coundDown();

      setTimeout(cod, 3000);
      function cod() {
        ballH.posX = areaH.width / 2 - ballH.width / 2; //     285;

        ballH.posY = areaH.height / 2 - ballH.height / 2; //        160;
        ballH.speedX = arr[randomX];
        ballH.speedY = arr[randomY];
      }
    }
  }

  ballH.posY += ballH.speedY;
  if (ballH.posY + ballH.height > areaH.height) {
    //низ
    ballH.speedY = -ballH.speedY;
    ballH.posY = areaH.height - ballH.height;
  }
  if (ballH.posY < 0) {
    //Верх
    ballH.speedY = -ballH.speedY;
    ballH.posY = 0;
  }
  touchLeft();
  touchRight();

  ballH.update();
}

function pusk() {
  coundDown();

  setTimeout(start, 3000);
}

function coundDown() {
  let i = 3;
  if (counttwo != gameover && countone != gameover) {
    time.innerHTML = i;
    (function stop() {
      let step = setInterval(function () {
        i--;
        time.innerHTML = i;
        if (i < 1) {
          clearInterval(step);
          time.innerHTML = " ";
        }
      }, 1000);
    })();
  } else {
    time.innerHTML = " ";
  }
}

function speedOne(event) {
  if (event.code == "KeyZ") {
    plOne.posY += plOne.speedDown;
    if (plOne.posY + plOne.height >= areaH.height) {
      plOne.posY = areaH.height - plOne.height;
    }
  }
  if (event.code == "KeyA") {
    plOne.posY += plOne.speedUp;
    if (plOne.posY <= 0) {
      plOne.posY = 0;
    }
  }

  plOne.run();
}

function speedTwo(event) {
  if (event.code == "KeyM") {
    plTwo.posY += plTwo.speedDown;
    if (plTwo.posY + plTwo.height >= areaH.height) {
      plTwo.posY = areaH.height - plTwo.height;
    }
  }
  if (event.code == "KeyK") {
    plTwo.posY += plTwo.speedUp;
    if (plTwo.posY <= 0) {
      plTwo.posY = 0;
    }
  }
  plTwo.run();
}

function touchRight() {
  if (
    ballH.posX + ballH.width > areaH.width - plTwo.width &&
    plTwo.posY <= ballH.posY &&
    ballH.posY <= Number(plTwo.posY + 100)
  ) {
    ballH.speedX = -ballH.speedX;
    ballH.posX = areaH.width - ballH.width - plTwo.width;
  }
}

function touchLeft() {
  if (
    ballH.posX < plTwo.width &&
    plOne.posY <= ballH.posY &&
    ballH.posY <= Number(plOne.posY + 100)
  ) {
    ballH.speedX = -ballH.speedX;
    ballH.posX = plTwo.width;
  }
}

ballH.update();
