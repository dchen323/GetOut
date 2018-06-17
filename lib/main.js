

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const c = canvas.getContext('2d');

  canvas.width = window.innerWidth / 1.4;
  canvas.height = window.innerHeight;

  let x = 0;
  let y = 0;
  let length = 50;
  let width = (Math.random() + 0.5) * 300;

  for(let i = 0; i < 3; i ++){
    c.fillRect(x,y,width,length);
    x = x + width + (Math.random() + 0.5) * 100;
    width = (Math.random()+ 0.5) * 300;
    if(x + width > canvas.width){
      width = canvas.width - x;
    }
  }

  let startX = 50;
  let startY = 300;
  let platformWidth = 100;

  c.fillRect(startX,startY,platformWidth, startX);

  makeBase();
  makeFire();


  let cx = 90;
  let cy = 262;
  let sx = 40;
  let sy = 40;

  function makeBase(){
    let sprite = new Image();
    sprite.src = "https://s33.postimg.cc/dlhyeyknj/chicken2.png";
    sprite.onload = () => {
      c.drawImage(sprite,cx,cy, sx,sy);
    };
  }

  function makeFire() {
    let fire = new Image();
    fire.src = "https://s33.postimg.cc/dlhyf7kq7/fire.png";
    let sx2 = 50;
    let sy2 = 50;
    let cx2 = -5;
    let cy2 = canvas.height - sy2;
    fire.onload = () => {
      while(cx2 < canvas.width - sx2){
        c.drawImage(fire, cx2,cy2, sx2,sy2);
        cx2 += sx2 - 5;
      }
    };
  }

});
