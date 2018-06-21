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
    this.dx = 0;
    this.dy = 0;
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
    this.x = hook.xEnd - Math.sin(hook.radian) * hook.length;
    this.y = hook.yEnd + Math.cos(hook.radian) * hook.length;
    this.dx = Math.sin(hook.radian) * -1 * hook.length;
    this.dy = Math.cos(hook.radian) * hook.length;
    this.animate();
  }

  lose(){
    return (this.y + this.sy
        >= this.ctx.canvas.height - 45) ;
  }

}

export default Chicken;
