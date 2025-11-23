const homepageBtn = document.getElementById("homepage"); //define homepage button

const stats = document.querySelector(".stats"); //define stats container

const game = document.querySelector(".game"); //define gaem container

const qrCode = document.querySelector("#qrCode"); //define qr

const ranking = document.querySelector(".ranking"); //define ranking

const consoleWin = document.querySelector(".console");

const width = window.innerWidth; //define width (checkks window size)

const iframe = document.getElementById("iframe-game");

function qrhider() {
  if (width > 1300) {
    qrCode.style.display = "none";
    ranking.style.display = "flex";
    consoleWin.style.height = "348px";
  } //hide qr, show ranking, fix console sizing
}

//game1 sanke
document.getElementById("game1").addEventListener("click", () => {
  if (language == "en") {
    iframe.src = "games/snake.html";
  } else {
    iframe.src = "games/german/snake.html";
  }
  qrhider();
  addMessageConsole("opened snake", "snake geöffnet");
});

//gaem 2 ttt
document.getElementById("game3").addEventListener("click", () => {
  if (language == "en") {
    iframe.src = "games/tictactoe.html";
  } else {
    iframe.src = "games/german/tictactoe.html";
  }
  qrhider();
  addMessageConsole("opened tictactoe", "tictactoe geöffnet");
});

//game 3 rps
document.getElementById("game4").addEventListener("click", () => {
  if (language == "en") {
    iframe.src = "games/rps.html";
  } else {
    iframe.src = "games/german/rps.html";
  }
  qrhider();
  addMessageConsole("opened rps", "ssp geöffnet");
});

//gaem4 dino
document.getElementById("game2").addEventListener("click", () => {
  if (language == "en") {
    iframe.src = "games/dino.html";
  } else {
    iframe.src = "games/german/dino.html";
  }
  qrhider();
  addMessageConsole("opened Dinosaur game", "Dinu geöffnet");
});

//==========homepage==========//
document.getElementById("homepage").addEventListener("click", () => {
  iframe.src =
    "https://1drv.ms/p/c/25c3ef05481f4fde/IQQ7PFqJ2omsTa2p57JnEB8LAUAE9m_oLMgpz07Ukq8lqLA?em=2&amp;wdAr=1.7777777777777777";
  if (width > 1300) {
    qrCode.style.display = "flex"; //show qr
    ranking.style.display = "none"; //hide ranking
    consoleWin.style.height = "336px";
  }
  addMessageConsole("opened homepage", "homepage geöffnet");
});

//checks for clickks on the homepage button
homepageBtn.addEventListener("click", () => {
  //checkks if indow size is in ipad range
  if (width >= 1080 && width <= 1300) {
    stats.style.display = "none"; // hide stats containre
    game.style.width = "55rem"; // increase width
  }
});

//==========game ranking etc opener==========//

const gameBtn = document.getElementsByClassName("statsopener");

gameBtn[0].addEventListener("click", () => {
  console.log("game 0 qrtest");
  if (width >= 1080 && width <= 1300) {
    stats.style.display = "flex"; // show  stats containre
    game.style.width = "35rem"; // decrease width
  }
});

gameBtn[1].addEventListener("click", () => {
  console.log("game 1");
  if (width >= 1080 && width <= 1300) {
    stats.style.display = "flex"; // show  stats containre
    game.style.width = "35rem"; // decrease width
  }
});

gameBtn[2].addEventListener("click", () => {
  console.log("test");
  if (width >= 1080 && width <= 1300) {
    stats.style.display = "flex"; // show  stats containre
    game.style.width = "35rem"; // decrease width
  }
});

gameBtn[3].addEventListener("click", () => {
  console.log("test");
  if (width >= 1080 && width <= 1300) {
    stats.style.display = "flex"; // show  stats containre
    game.style.width = "35rem"; // decrease width
  }
});

//i hate having to repaet this 4 times but im too lazy to do it in any other way
