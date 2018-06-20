

class Hook {
  constructor(ctx){
    this.ctx = ctx;
    this.yEnd = 50;
    this.draw = this.draw.bind(this);
  }

  checkCollision(otherObj){
    let collision = Object.values(otherObj).filter(ceiling => {
        return(
          this.xEnd >= ceiling.x && this.xEnd <= (ceiling.x + ceiling.width)
        );

      });

      return collision[0];
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
