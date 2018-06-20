const SPRITESIZE = 125;

class ChickenCoop {
  constructor(ctx){
    this.ctx = ctx;
    this.image = new Image();
    this.image.src= "./images/chicken_coop.png";
    this.sx = SPRITESIZE;
    this.sy = SPRITESIZE;
    this.x = 200;
    this.y = ctx.canvas.height / 2 + 50;
    this.draw = this.draw.bind(this);
  }

  draw(){
    this.ctx.drawImage(this.image,this.x,this.y,this.sx,this.sy);
  }

  checkWin(chicken){
    if (chicken.x < this.x + this.sx &&
        chicken.x + chicken.sx > this.x &&
        chicken.y < this.y + this.sy &&
        chicken.y + chicken.sy > this.y){
          return 1;
    }
    return null;
  }


}

export default ChickenCoop;
