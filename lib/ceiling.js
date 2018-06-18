class Ceiling {
  constructor(ctx,x,y,width){
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.length = 50;
    this.draw();
  }

  draw(){
    this.ctx.fillRect(this.x,this.y,this.width,this.length);
  }
}

export default Ceiling;
