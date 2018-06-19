import Chicken from './chicken';
import Map from './map';
import Hook from './hook';

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.map = new Map(ctx);
    this.chicken = new Chicken(ctx);
    this.hook = new Hook(ctx);
    this.mouseDown = false;
    this.animate = this.animate.bind(this);
    this.update = this.update.bind(this);
  }

  init(){
    this.map.makeCeiling();
    this.map.makePlatform();
    this.map.makeFire();
    this.chicken.draw();
  }

  draw(){
    this.map.makeCeiling();
    this.map.makePlatform();
    this.map.makeFire();
    this.chicken.draw();
  }

  checkCollision(){
    let collision = Object.values(this.map.ceiling).filter(ceiling => {
      return(
        this.hook.x >= ceiling.x && this.hook.x <= (ceiling.x + ceiling.width)
      );

    });
    return collision[0];
  }

  setAngle(){
    this.radian = this.hook.angle;
  }

  update(){
    if(this.mouseDown){
      this.hook.setPos(this.chicken.x+(this.chicken.sx/1.3),this.chicken.y - 1);
      this.hook.launch();
    }
    if(this.checkCollision){
      this.chicken.update(this.hook.angle,this.hook.length);
    }
  }

  animate(){
    requestAnimationFrame(this.animate);
    // this.ctx.clearRect(0,50,this.ctx.canvas.width, this.ctx.canvas.height - 98);
    this.update();
  }

}

export default Game;
