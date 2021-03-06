import Ceiling from "./ceiling";
const RADIUS = 50;

class Map {
  constructor(ctx) {
    this.ctx = ctx;
    this.ceiling = {};
  }

  makeCeiling() {
    let ceilingCount = Math.round(this.ctx.canvas.width / 363);
    let x = 0;
    let y = 0;
    let width = (Math.random() + 0.5) * 300;
    for (let i = 0; i < ceilingCount; i++) {
      this.ceiling[i] = new Ceiling(this.ctx, x, y, width);
      x = x + width + (Math.random() + 0.5) * 100;
      width = (Math.random() + 0.5) * 300;
      if (x + width > this.ctx.canvas.width) {
        width = this.ctx.canvas.width - x;
      }
    }
  }

  makePlatform() {
    let startX = 50;
    let startY = 300;
    let size = 100;
    let cage = new Image();
    cage.src = "./images/cage.png";
    cage.onload = () => {
      this.ctx.drawImage(cage, startX, startY, size, size);
    };
  }

  makeAnimatedFire() {
    let fire = new Image();
    fire.src = "./images/fire.png";
    let sx2 = 50;
    let sy2 = 50;
    let cx2 = -5;
    let cy2 = this.ctx.canvas.height - sy2;
    while (cx2 < this.ctx.canvas.width - sx2) {
      this.ctx.drawImage(fire, cx2, cy2, sx2, sy2);
      cx2 += sx2 - 5;
    }
  }

  makeFire() {
    let fire = new Image();
    fire.src = "./images/fire.png";
    let sx2 = 50;
    let sy2 = 50;
    let cx2 = -5;
    let cy2 = this.ctx.canvas.height - sy2;
    fire.onload = () => {
      while (cx2 < this.ctx.canvas.width - sx2) {
        this.ctx.drawImage(fire, cx2, cy2, sx2, sy2);
        cx2 += sx2 - 5;
      }
    };
  }
}

export default Map;
