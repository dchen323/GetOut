
class Map {
  constructor(canvas,ctx){
    this.x = 0;
    this.y = 0;
    this.length = 50;
    this.width = (Math.random() + 0.5) * 300;
    this.canvas = canvas;
    this.ctx = ctx;

  }

  makeCeiling(){
    for(let i = 0; i < 3; i++) {
      this.ctx.fillRect(this.x,this.y,this.width,this.length);
      this.x = this.x + this.width + (Math.random() + 0.5) * 100;
      this.width = (Math.random()+ 0.5) * 300;
      if(this.x + this.width > this.canvas.width){
        this.width = this.canvas.width - this.x;
      }
    }
  }

  makePlatform(){
    let startX = 50;
    let startY = 300;
    let platformWidth = 100;
    this.ctx.fillRect(startX,startY,platformWidth, startX);
  }

  makeFire(){
    let fire = new Image();
    fire.src = "./images/fire.PNG";
    let sx2 = 50;
    let sy2 = 50;
    let cx2 = -5;
    let cy2 = this.canvas.height - sy2;
    fire.onload = () => {
      while(cx2 < this.canvas.width - sx2){
        this.ctx.drawImage(fire, cx2,cy2, sx2,sy2);
        cx2 += sx2 - 5;
      }
    };
  }
}

export default Map;
