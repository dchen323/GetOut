
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
