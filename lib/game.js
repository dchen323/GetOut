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
    this.map.makePlatform();
    this.map.makeFire();
    this.chicken.draw();
  }

  checkCollision(){
    if (this.hook){
      return this.hook.checkCollision(this.map.ceiling);
    }
  }

  setAngle(){
    this.radian = this.hook.angle;
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
      // this.chicken.animate();
    }else if(!this.checkCollision()){
      this.chicken.animate();
    }
    // this.map.update(this.chicken.x);
    this.map.makeAnimatedFire();
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
