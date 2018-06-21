import Chicken from './chicken';
import Map from './map';
import Hook from './hook';
import ChickenCoop from './chicken_coop';

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.map = new Map(ctx);
    this.chicken = new Chicken(ctx);
    this.chickenCoop = new ChickenCoop(ctx);
    this.mouseDown = false;
    this.loseImage = new Image();
    this.loseImage.src = './images/roasted_chicken.png';
    this.animate = this.animate.bind(this);
    this.update = this.update.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.score = 0;

  }


  init(){
    this.map.makeCeiling();
    this.chicken.draw();
    this.map.makePlatform();
    this.map.makeFire();
    this.ctx.font = "6vw Courier";
    const gradient= this.ctx.createLinearGradient(0,0,800,150);
    gradient.addColorStop("0.33","#F0CB35");
    gradient.addColorStop("0.66","#fe8c00");
    gradient.addColorStop("0.99","#C02425");
    this.ctx.fillStyle= gradient;
    this.ctx.fillText("Press Spacebar",150, 150);
    this.ctx.fillText("to", 400, 250);
    this.ctx.fillText("Start!", 320, 350);
  }

  checkCollision(){
    if (this.hook){
      return this.hook.checkCollision(this.map.ceiling);
    }else {
      return null;
    }
  }



  update(){
    if(this.chickenCoop.checkWin(this.chicken)){
      this.ctx.font = "6vw Courier";
      this.ctx.fillStyle="#f4a142";
      this.ctx.fillText("CONGRATS YOU WIN!",
        this.ctx.canvas.width - 850, this.ctx.canvas.height /2);
    }else if (this.chicken.lose()){
      let textPlace = this.score < 53 ?
        this.chicken.x : this.ctx.canvas.width - 850;
      this.ctx.drawImage(this.loseImage,this.chicken.x,this.chicken.y,80,80);
      this.ctx.font = "8vw Courier";
      this.ctx.fillStyle="red";
      this.ctx.fillText("BBQ Chicken",
        textPlace, this.ctx.canvas.height /2);
    }else{
      if(this.mouseDown){
        if(this.checkCollision()){
          this.hook.update();
        }else{
          this.hook.draw();
        }
      }
      if(this.checkCollision()){
        this.chicken.updateSwing(this.hook);
        this.hook.setPos(this.chicken.x + this.chicken.sx, this.chicken.y);
      }else if(!this.checkCollision()){
        this.chicken.x += this.chicken.dx/50;
        this.chicken.y += + 0.80;
        this.chicken.animate();
      }
      this.map.makeAnimatedFire();
      this.chickenCoop.draw();
      this.updateScore();
    }
  }

  updateScore(){
    this.score = Math.floor((this.chicken.x - 90)/100);
    this.ctx.font = "2vw Courier";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(`Score: ${this.score}`, this.chicken.x - 50, 80);
  }

  panUser(){
    let canvasHolder = document.getElementById("canvas-holder");
    canvasHolder.scrollLeft = this.chicken.x - 100;
  }

  animate(){
    requestAnimationFrame(this.animate);
    this.ctx.clearRect(0,50,this.ctx.canvas.width, this.ctx.canvas.height);
    this.panUser();
    this.update();
  }

}

export default Game;
