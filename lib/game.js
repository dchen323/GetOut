import Chicken from "./chicken";
import Map from "./map";
import Hook from "./hook";
import ChickenCoop from "./chicken_coop";

const SPRITESIZE = 80;
const font = "Oswald";

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.map = new Map(ctx);
    this.chicken = new Chicken(ctx);
    this.chickenCoop = new ChickenCoop(ctx);
    this.mouseDown = false;
    this.loseImage = new Image();
    this.loseImage.src = "./images/roasted_chicken.png";
    this.animate = this.animate.bind(this);
    this.score = 0;
    this.music = true;
    this.start = false;
  }

  init() {
    this.map.makeCeiling();
    this.chicken.draw();
    this.map.makePlatform();
    this.map.makeFire();
    this.ctx.font = `7vw ${font}`;
    const gradient = this.ctx.createLinearGradient(0, 0, 800, 150);
    gradient.addColorStop("0.33", "#F0CB35");
    gradient.addColorStop("0.66", "#fe8c00");
    gradient.addColorStop("0.99", "#C02425");
    this.ctx.fillStyle = gradient;
    this.ctx.fillText("Press Spacebar", 220, 200);
    this.ctx.fillText("to", 420, 300);
    this.ctx.fillText("Start!", 360, 400);
    this.ctx.font = `1.5vw ${font}`;
    this.ctx.fillStyle = "red";
    this.ctx.fillText(
      "Tip: Click and hold the mouse down near/at the ceiling and release before it swings backwards.",
      90,
      500
    );
  }

  checkCollision() {
    if (this.hook) {
      return this.hook.checkCollision(this.map.ceiling);
    } else {
      return null;
    }
  }

  update() {
    if (this.chickenCoop.checkWin(this.chicken)) {
      this.ctx.font = `6vw ${font}`;
      this.ctx.fillStyle = "#f4a142";
      this.ctx.fillText(
        "CONGRATS YOU WIN!",
        this.ctx.canvas.width * 0.88,
        this.ctx.canvas.height / 2
      );
      this.ctx.font = `6vw ${font}`;
      this.ctx.fillText(
        "Press R to Restart",
        this.ctx.canvas.width * 0.88,
        this.ctx.canvas.height / 2 + 200
      );
    } else if (this.chicken.lose()) {
      let textPlace =
        this.score < (this.ctx.canvas.width * 0.85) / 100
          ? this.chicken.x + 75
          : this.ctx.canvas.width * 0.88;
      this.ctx.drawImage(
        this.loseImage,
        this.chicken.x,
        this.chicken.y,
        SPRITESIZE,
        SPRITESIZE
      );
      this.ctx.font = `9vw ${font}`;
      this.ctx.fillStyle = "red";
      this.ctx.fillText(
        "BBQ Chicken",
        textPlace < 0 ? 200 : textPlace,
        this.ctx.canvas.height / 2
      );
      this.ctx.font = `6vw ${font}`;
      this.ctx.fillText(
        "Press R to Restart",
        textPlace < 0 ? 200 : textPlace,
        this.ctx.canvas.height / 2 + 200
      );
    } else {
      if (this.mouseDown) {
        if (!this.checkCollision()) {
          this.hook.draw();
        }
      }
      if (this.checkCollision()) {
        this.chicken.updateSwing(this.hook);
        this.hook.setPos(this.chicken.x + this.chicken.sx, this.chicken.y);
        this.hook.update();
      } else if (!this.checkCollision()) {
        this.chicken.x += this.chicken.dx / 50;
        this.chicken.y += 0.6;
        this.chicken.animate();
      }
      this.map.makeAnimatedFire();
      this.chickenCoop.draw();
      this.updateScore();
    }
  }

  updateScore() {
    this.score = Math.floor((this.chicken.x - 90) / 100);
    if (this.score < 0) this.score = 0;
    this.ctx.font = "2vw Courier";
    this.ctx.fillStyle = "black";
    const xPos = this.chicken.x - 50 < 50 ? 50 : this.chicken.x - 50;
    this.ctx.fillText(`Score: ${this.score}`, xPos, 80);
  }

  panUser() {
    let canvasHolder = document.getElementById("canvas-holder");
    canvasHolder.scrollLeft = this.chicken.x - 100;
  }

  animate() {
    this.frame = requestAnimationFrame(this.animate);
    this.start = true;
    this.ctx.clearRect(0, 50, this.ctx.canvas.width, this.ctx.canvas.height);
    this.panUser();
    this.update();
  }

  stopGame() {
    if (this.frame) {
      cancelAnimationFrame(this.frame);
      this.start = false;
    }
  }
}

export default Game;
