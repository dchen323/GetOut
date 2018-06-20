const SPRITESIZE = 40;

class Finish {
  constructor(ctx){
    this.ctx = ctx;
    this.image = new Image();
    this.image.src= "./chicken_coop.png";
    this.x = 200;
    this.y = ctx.height / 2 + 150;
  }

  draw(){
    this.ctx.drawImage(this.image,this.x,this.y,this.sx,this.sy);
  }


}
