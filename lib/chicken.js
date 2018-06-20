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
    this.radian = undefined;
    this.animate = this.animate.bind(this);
    this.swing = true;
    this.gravity = 0.005;
    this.aVel = 0;
  }

  draw(){
    this.image.onload = () => {
      this.ctx.drawImage(this.image, this.x, this.y, this.sx,this.sy);
    };

  }

  animate(){
    this.ctx.drawImage(this.image,this.x,this.y,this.sx,this.sy);
  }

  update(radian,length){
    this.radian = this.radian || radian;
    this.animate();
    if(this.swing){
      this.radian += 0.01;
      this.x = this.x + Math.cos(this.radian) * 2;
      this.y = this.y + Math.sin(this.radian);
      if(this.radian + 0.01 > Math.PI){
        this.swing = false;
      }
    }else{
      this.radian -= 0.01;
      this.x = this.x - Math.cos(this.radian) * 2;
      this.y = this.y - Math.sin(this.radian);
      if(this.radian < 0){
        this.swing = true;
      }
    }

  }
  //
  // update(radian,length){
  //   this.radian = this.radian || radian - Math.PI;
  //   this.xOrigin = this.xOrigin || this.radian;
  //   console.log(this.radian, this.xOrigin);
  //   this.dx = Math.sin(this.radian);
  //   this.dy = Math.cos(this.radian);
  //   if(this.swing){
  //     this.radian += 0.01;
  //     this.x = this.x - this.dx;
  //     this.y = this.y - this.dy;
  //     if(this.radian > this.xOrigin/ (Math.PI/1.5)){
  //       this.swing = false;
  //     }
  //   }else{
  //     this.radian -= 0.01;
  //     this.x = this.x + this.dx;
  //     this.y = this.y + this.dy;
  //     if(this.radian < this.xOrigin){
  //       this.swing = true;
  //     }
  //   }
  //
  //   this.animate();
  // }

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
