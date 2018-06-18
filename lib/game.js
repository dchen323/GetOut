import Chicken from './chicken';
import Map from './map';
import Hook from './hook';

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.map = new Map(ctx);
    this.sprite = new Chicken(ctx);
    this.hook = undefined;
    this.createHook = this.createHook.bind(this);
  }

  init(){
    this.map.makeCeiling();
    this.map.makePlatform();
    this.map.makeFire();
    this.sprite.draw();

  }

  checkCollision(){
    let collision = Object.values(this.map.ceiling).filter(ceiling => {
      return(
        this.hook.x >= ceiling.x && this.hook.x <= (ceiling.x + ceiling.width)
      );

    });
    return collision[0];
  }

  swing(){
    this.ctx.clearRect(50,300,100,100);
  }

  createHook(x,y){
    this.hook = new Hook(this.ctx,this.sprite.x + this.sprite.sx/1.3,
      this.sprite.y-1, x, y);
    this.hook.animate();
  }

}

export default Game;
