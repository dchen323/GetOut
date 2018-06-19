import Game from './game';

const MINCEILINGWIDTH = 50;

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth / 1.4;
  canvas.height = window.innerHeight;
  const game = new Game(ctx);
  game.init();


  document.addEventListener('mousedown', (event) => {
    let eventx = event.x - canvas.getBoundingClientRect().left;
    game.hook.xEnd = eventx;
    debugger
    game.mouseDown = true;
    game.animate();
    if(game.checkCollision()){
      // game.setAngle();
      // game.swing();
    }
  });

  document.addEventListener('mouseup', (event) => {
    game.mouseDown = false;
  });






});
