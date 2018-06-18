const XSTART = 90;
const YSTART = 260;
const SPRITESIZE = 40;

class Chicken {
  constructor(ctx){
    this.x = XSTART;
    this.y = YSTART;
    this.sx = SPRITESIZE;
    this.sy = SPRITESIZE;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "./images/chicken.png";
  }

  draw(){
    this.image.onload = () => {
      this.ctx.drawImage(this.image, this.x, this.y, this.sx,this.sy);
    };
  }

}

export default Chicken;
