

class Hook {
  constructor(ctx){
    this.ctx = ctx;
    this.yEnd = 50;
    this.setPos = this.setPos.bind(this);
  }

  launch(){
    while(this.y > 50){
      this.draw();
      this.x += this.dx;
      if(this.y - 2 * this.dy < 50){
        this.y -= (this.y - 50);
      }else{
        this.y -= this.dy;
      }
    }
  }

  setPos(x,y){
    this.x = x;
    this.y = y;
    this.angle = Math.atan((this.xEnd-x)/Math.abs(this.yEnd-y));
    this.length = Math.sqrt(Math.pow((this.xEnd-x),2)+Math.pow((this.yEnd-y),2));
    this.dx = Math.sin(this.angle);
    this.dy = Math.cos(this.angle);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.dx,this.y - this.dy);
    this.ctx.stroke();
  }

}

export default Hook;
