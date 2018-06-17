
class Sprite {
  constructor(options = {}){
    this.x = null;
    this.y = null;
    this.dx = options.dx;
    this.dy = options.dy;
    this.image = new Image();
    this.image.src = "https://s33.postimg.cc/6oj6ox46n/chicken.jpg";

  }

  pos(x,y){
    this.x = x;
    this.y = y;
  }

  draw(ctx){
    ctx.drawImage(this.img, this.x, this.y);
  }
}

export default Sprite;
