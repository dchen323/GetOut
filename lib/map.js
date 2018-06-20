import Ceiling from './ceiling';
const RADIUS = 50;

class Map {
  constructor(ctx){
    this.ctx = ctx;
    this.ceiling = {};
    this.makeCeiling = this.makeCeiling.bind(this);
  }

  makeCeiling(){
    let x = 0;
    let y = 0;
    let width = (Math.random() + 0.5) * 300;
    for(let i = 0; i < 20; i++) {
      this.ceiling[i] = new Ceiling(this.ctx,x,y,width);
      x = x + width + (Math.random() + 0.5) * 100;
      width = (Math.random()+ 0.5) * 300;
      if(x + width > this.ctx.canvas.width){
        width = this.ctx.canvas.width - x;
      }
    }
  }

  makeFinish(){
    this.ctx.beginPath();
    this.ctx.arc(this.ctx.canvas.width - 200, this.ctx.canvas.height / 2 + 200, RADIUS , 0, 2 * Math.PI);
    this.ctx.stroke();
  }

  makePlatform(){
    let startX = 50;
    let startY = 300;
    let platformWidth = 100;
    this.ctx.fillRect(startX,startY,platformWidth, startX);
  }

  makeAnimatedFire(){
    let fire = new Image();
    fire.src = "./images/fire.png";
    let sx2 = 50;
    let sy2 = 50;
    let cx2 = -5;
    let cy2 = this.ctx.canvas.height - sy2;
    while(cx2 < this.ctx.canvas.width - sx2){
      this.ctx.drawImage(fire, cx2,cy2, sx2,sy2);
      cx2 += sx2 - 5;
    }
  }

  makeFire(){
    let fire = new Image();
    fire.src = "./images/fire.png";
    let sx2 = 50;
    let sy2 = 50;
    let cx2 = -5;
    let cy2 = this.ctx.canvas.height - sy2;
    fire.onload = () => {
      while(cx2 < this.ctx.canvas.width - sx2){
        this.ctx.drawImage(fire, cx2,cy2, sx2,sy2);
        cx2 += sx2 - 5;
      }
    };
  }
}

export default Map;
