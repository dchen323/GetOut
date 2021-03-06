import Game from "./game";
import Hook from "./hook";
import Sound from "./sound";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let canvasHolder = document.getElementById("canvas-holder");

  canvas.width = window.innerWidth * 5;
  canvas.height = window.innerHeight;
  const game = new Game(ctx);
  game.init();
  const audioPlayer = document.getElementById("audio");
  const instructions = document.getElementById("instruction");
  document.addEventListener("keypress", event => {
    if (event.keyCode === 32) {
      instructions.id = "hidden";
      if (!game.start) {
        game.animate();
      }
      if (!audioPlayer.hasAttribute("muted")) {
        audioPlayer.play();
      }
    } else if (event.keyCode === 114) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      game.stopGame();
      game.chicken.x = 90;
      game.chicken.y = 260;
      game.chicken.dx = 0;
      game.chicken.dy = 0;
      game.chicken.animate();
      canvasHolder.scrollLeft = 0;
      game.init();
      document.getElementById("hidden").id = "instruction";
    }
  });

  document.addEventListener("mousedown", event => {
    let eventx = event.x - canvas.getBoundingClientRect().left;
    let hook = new Hook(ctx);
    hook.xEnd = eventx;
    hook.setPos(game.chicken.x + game.chicken.sx, game.chicken.y - 2);
    if (event.x > window.innerWidth / 4) {
      const sound = new Sound("./sound/launch.wav");
      sound.play();
    }
    game.hook = hook;
    game.mouseDown = true;
  });

  document.addEventListener("mouseup", event => {
    game.mouseDown = false;
    game.hook = null;
  });

  document.addEventListener("click", event => {
    if (
      event.target.id === "audio-play" ||
      event.target.id === "audio-pause" ||
      event.target.className === "fas fa-pause" ||
      event.target.className === "fas fa-play"
    ) {
      const audioPlay = document.getElementById("audio-play");
      const audioPause = document.getElementById("audio-pause");
      if (game.music === true) {
        audioPlayer.pause();
        audioPause.className = "hidden";
        audioPlay.classList.remove("hidden");
        game.music = false;
        audioPlayer.setAttribute("muted", "");
      } else {
        audioPlayer.play();
        audioPlay.className = "hidden";
        audioPause.classList.remove("hidden");
        game.music = true;
      }
    }
  });
});
