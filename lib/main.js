import Sprite from './sprite';
import Map from './map';
import Hook from './hook';
const sideBarWidth = 0.25;

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth / 1.4;
  canvas.height = window.innerHeight;

  init();
  let spritex;
  let spritey;
  function init(){
    const map = new Map(ctx);
    map.makeCeiling();
    map.makePlatform();
    map.makeFire();
    const sprite = new Sprite(ctx);
    spritex = sprite.x + sprite.sx;
    spritey = sprite.y;
    sprite.draw();
  }

  document.addEventListener('click', (event) => {
    console.log(event.x, event.y);
    let hook = new Hook(ctx,spritex,spritey,
      event.x - canvas.getBoundingClientRect().left, event.y);
    hook.animate();
  });


  // function getHook(posx,posy){
  //   c.beginPath();
  //   c.moveTo(cx + sx, cy);
  //   c.lineTo(posx,posy);
  //   c.stroke();
  // }

});
