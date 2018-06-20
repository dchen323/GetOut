

class Hook {
  constructor(ctx){
    this.ctx = ctx;
    this.yEnd = 50;
    this.setPos = this.setPos.bind(this);
    this.draw = this.draw.bind(this);
  }

  setPos(x,y){
    this.x = x;
    this.y = y;
    this.radian= Math.atan((this.xEnd-x)/Math.abs(this.yEnd-y));
    this.length = Math.sqrt(Math.pow((this.xEnd-x),2)+Math.pow((this.yEnd-y),2));
  }

  update(){
    this.radian += 0.01;
    this.x = this.x + Math.sin(this.radian) * this.length;
    this.y = this.y + Math.cos(this.radian) * this.length;
    this.draw();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.xEnd,this.yEnd);
    this.ctx.stroke();
  }

}

export default Hook;
