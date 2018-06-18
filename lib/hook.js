

class Hook {
  constructor(ctx, xStart,yStart,xEnd,yEnd){
    this.ctx = ctx;
    this.x = xStart;
    this.y = yStart;
    this.yStart = yStart;
    this.angle = Math.atan((xEnd-xStart)/Math.abs(yEnd-yStart));
    this.length = Math.sqrt(Math.pow((xEnd-xStart),2)+Math.pow((yEnd-yStart),2));
    this.dx = Math.sin(this.angle);
    this.dy = Math.cos(this.angle);
    this.animate = this.animate.bind(this);
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

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.dx,this.y - this.dy);
    this.ctx.stroke();
  }

  attach(otherObject){

  }



  animate(){
    requestAnimationFrame(this.animate);
    this.launch();
  }
}

export default Hook;
