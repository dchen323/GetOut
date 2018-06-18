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
    game.createHook(eventx,event.y);
    if(game.checkCollision()){
      game.swing();
    }
  });

  document.addEventListener('mouseup', (event) => {
    ctx.clearRect(0,MINCEILINGWIDTH, canvas.width,
      game.sprite.y - MINCEILINGWIDTH);
  });






});
