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
let arr = [3, 4, 5, -3, -4, -5];
let randomX = Math.floor(Math.random() * 6);
let randomY = Math.floor(Math.random() * 6);
let z = "KeyZ";
let a = "KeyA";
let m = "KeyM";
let k = "KeyK";
let flackDownOne = true;
let flackUpOne = true;
let flackUpTwo = true;
let flackDownTwo = true;
button.addEventListener("click", pusk);

let one = document.getElementById("plauerOne");

let two = document.getElementById("plauerTwo");

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
let bSpeed = 6;
let ballH = {
  width: 30,
  height: 30,
  speepball: 10,
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
  posY: 225, //  areaH.height/2 - this.height/2 ,
  speed: 0,
};
let plTwo = {
  width: 15,
  height: 100,
  posY: 225, //  areaH.height/2 - this.height/2 ,
  speed: 0,
  posX: (plauerTwo.style.left = areaH.width - plOne.width + "px"),
};

function onePL() {
  one.style.top = plOne.posY + "px";
}
function twoPL() {
  two.style.top = plTwo.posY + "px";
}

function start() {
  requestAnimationFrame(tick);
}

function tick() {
  let arr = [3, 4, 5, -3, -4, -5];
  let randomX = Math.floor(Math.random() * 6);
  let randomY = Math.floor(Math.random() * 6);

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

  // Движение ракеток
  plOne.posY += plOne.speed;
  plTwo.posY += plTwo.speed;

  //выезд первого вверх
  if (plOne.posY + plOne.height >= areaH.height) {
    plOne.posY = areaH.height - plOne.height;
  }

  //выезд первого вниз
  if (plOne.posY <= 0) {
    plOne.posY = 0;
  }
  onePL();
  //выезд второго вверх
  if (plTwo.posY + plTwo.height >= areaH.height) {
    plTwo.posY = areaH.height - plTwo.height;
  }

  //выезд второго вниз
  if (plTwo.posY <= 0) {
    plTwo.posY = 0;
  }
  twoPL();

  touchLeft();
  touchRight();

  ballH.update();
  document.addEventListener("keydown", startRun);
  document.addEventListener("keyup", finishRun);
  requestAnimationFrame(tick);
}

function pusk() {
  button.disabled = true;
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

function speed() {}

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

function startRun(event) {
  if (event.code == z) {
    plOne.speed = bSpeed;
  } else if (event.code == a) {
    plOne.speed = -bSpeed;
  }
  if (event.code == m) {
    plTwo.speed = bSpeed;
  } else if (event.code == k) {
    plTwo.speed = -bSpeed;
  }
}
function finishRun(event) {
  if (event.code == z) {
    plOne.speed = 0;
  } else if (event.code == a) {
    plOne.speed = 0;
  }
  if (event.code == k) {
    plTwo.speed = 0;
  } else if (event.code == m) {
    plTwo.speed = 0;
  }
}
