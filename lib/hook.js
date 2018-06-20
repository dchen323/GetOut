

class Hook {
  constructor(ctx){
    this.ctx = ctx;
    this.yEnd = 50;
    this.draw = this.draw.bind(this);
    this.aVel = 0;
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
    this.radian= this.radian || Math.atan((this.xEnd-x)/Math.abs(this.yEnd-y));
    this.length = this.length || Math.sqrt(Math.pow((this.xEnd-x),2)+Math.pow((this.yEnd-y),2));

  }

  update(){
    let aAcc = -0.01 * Math.sin(this.radian);
    this.radian += this.aVel;
    this.aVel += aAcc;
    this.aVel *= 0.99;

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
