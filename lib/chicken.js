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
    this.animate = this.animate.bind(this);
    this.swing = true;
    this.gravity = 0.005;
  }

  draw(){
    this.image.onload = () => {
      this.ctx.drawImage(this.image, this.x, this.y, this.sx,this.sy);
    };

  }

  animate(){
    this.ctx.drawImage(this.image,this.x,this.y,this.sx,this.sy);
  }

  updateSwing(hook){
    // this.radian = this.radian || hook.radian;
    // this.length = this.length || hook.length;
    // this.aAcc = -0.005 * Math.sin(this.radian);
    // this.radian += this.aVel;
    // this.aVel += this.aAcc;

    this.x = hook.xEnd + Math.sin(hook.radian) * hook.length;
    this.y = hook.yEnd + Math.cos(hook.radian) * hook.length;
    this.animate();
  }

}

export default Chicken;
