import Sprite from './sprite';
import Map from './map';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth / 1.4;
  canvas.height = window.innerHeight;

  init();

  function init(){
    const map = new Map(ctx);
    map.makeCeiling();
    map.makePlatform();
    map.makeFire();
    const sprite = new Sprite(ctx);
    sprite.draw();
  }


  // document.addEventListener('click', (e) => {
  //
  //   getHook(e.x, e.y);
  // });


  // function getHook(posx,posy){
  //   c.beginPath();
  //   c.moveTo(cx + sx, cy);
  //   c.lineTo(posx,posy);
  //   c.stroke();
  // }

});
