

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const c = canvas.getContext('2d');

  canvas.width = window.innerWidth / 1.4;
  canvas.height = window.innerHeight;

  let x = 0;
  let y = 0;
  let length = 50;
  let width = Math.random()+1 * 300;

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

  c.fillRect(startX,startY,100, startX);

});
