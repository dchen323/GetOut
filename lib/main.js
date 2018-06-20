import Game from './game';
import Hook from './hook';


const MINCEILINGWIDTH = 50;

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const game = new Game(ctx);
  game.init();
  game.animate();


  document.addEventListener('mousedown', (event) => {
    let eventx = event.x - canvas.getBoundingClientRect().left;
    let hook = new Hook(ctx);
    hook.setPos(game.chicken.x + game.chicken.sx,game.chicken.y - 2);
    game.hook = hook;
    console.log(game.hook);
    game.hook.xEnd = eventx;
    game.mouseDown = true;

  });

  document.addEventListener('mouseup', (event) => {
    game.mouseDown = false;
  });






});
