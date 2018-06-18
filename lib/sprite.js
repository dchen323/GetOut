const XSTART = 90;
const YSTART = 262;
const SPRITESIZE = 40;

class Sprite {
  constructor(ctx){
    this.x = XSTART;
    this.y = YSTART;
    this.sx = SPRITESIZE;
    this.sy = SPRITESIZE;
    this.image = new Image();
    this.image.src = "./images/chicken.png";
    this.ctx = ctx;
  }

  draw(){
    this.ctx.drawImage(this.image, this.x, this.y, this.sx, this.sy);
  }

}

export default Sprite;
