import Sprite from './sprite';
import Map from './map';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth / 1.4;
  canvas.height = window.innerHeight;

  init();

  function init(){
    const map = new Map(canvas,ctx);
    map.makeCeiling();
    map.makePlatform();
    map.makeFire();
    const sprite = new Sprite(ctx);
    sprite.draw();
  }
  
  // makeBase();
  //
  //
  // let cx = 90;
  // let cy = 262;
  // let sx = 40;
  // let sy = 40;
  //
  // let sprite = new Sprite();
  // sprite.draw(c);

  // document.addEventListener('click', (e) => {
  //
  //   getHook(e.x, e.y);
  // });


  // function makeBase(){
  //   let sprite = new Image();
  //   sprite.src = "./images/chicken.png";
  //   sprite.onload = () => {
  //     c.drawImage(sprite,cx,cy, sx,sy);
  //   };
  // }

  // function getHook(posx,posy){
  //   c.beginPath();
  //   c.moveTo(cx + sx, cy);
  //   c.lineTo(posx,posy);
  //   c.stroke();
  // }

});
