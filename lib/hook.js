const HOOKSPEED = 1;

class Hook {
  constructor(ctx, xStart,yStart,xEnd,yEnd){
    console.log(xStart,yStart,xEnd,yEnd);
    this.ctx = ctx;
    this.x = xStart;
    this.y = yStart;
    this.xEnd = xEnd;
    this.yEnd = yEnd;
    this.dx = HOOKSPEED;
    this.dy = HOOKSPEED;
    this.animate = this.animate.bind(this);
  }

  launch(){
    console.log(this.x, this.y,this.xEnd, this.yEnd);
    if (this.x < this.xEnd){
      this.x += this.dx;
    }
    if (this.y > this.yEnd){
      this.y -= this.dy;
    }
    this.draw();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.dx,this.y + this.dy);
    this.ctx.stroke();
  }

  animate(){
    requestAnimationFrame(this.animate);
    this.launch();
  }
}

export default Hook;
