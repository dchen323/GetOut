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
  }

  draw(){
    this.image.onload = () => {
      this.ctx.drawImage(this.image, this.x, this.y, this.sx,this.sy);
    };

  }

  animate(){
    console.log(this.radian);
    this.ctx.drawImage(this.image,this.x,this.y,this.sx,this.sy);
  }

  update(radian,length,gravity){

    this.radian = this.radian || Math.PI/2 - radian;
    if(this.swing){
      this.radian += 0.01;
      this.x = this.x + Math.sin(this.radian)*length/95;
      this.y = this.y + Math.cos(this.radian);
      if(this.radian + 0.01 > Math.PI){
        this.swing = false;
      }
    }else{
      this.radian -= 0.01;
      this.x = this.x - Math.sin(this.radian)* length/95;
      this.y = this.y - Math.cos(this.radian);
      if(this.radian < 0){
        this.swing = true;
      }
    }

    this.animate();
  }

}

export default Chicken;
