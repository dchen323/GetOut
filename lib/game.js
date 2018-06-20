import Chicken from './chicken';
import Map from './map';
import Hook from './hook';

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.map = new Map(ctx);
    this.chicken = new Chicken(ctx);
    this.mouseDown = false;
    this.animate = this.animate.bind(this);
    this.update = this.update.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
  }

  init(){
    this.map.makeCeiling();
    this.chicken.draw();
    this.map.makePlatform();
  }

  checkCollision(){
    if (this.hook){
      return this.hook.checkCollision(this.map.ceiling);
    }else {
      return null;
    }
  }



  update(){
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
      this.chicken.x += this.chicken.dx/500;
      this.chicken.y += (this.chicken.dy/500 + 0.85);
      this.chicken.animate();
    }
    this.map.makeAnimatedFire();
    this.map.makeFinish();
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
