const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
let blackBtn = document.getElementById('black');
let eraserBtn = document.getElementById('eraser');
let colorBtn = document.getElementById('colors');
let resizeBtn = document.getElementById('resize');
let resetBtn = document.getElementById('reset')
let color = "black";
let click = true;
let pixel; 
let gridsize = 50;

function drawGrid (screenSize) {
  for(let i = 0; i < screenSize ** 2; i++) {
    let pixel = document.createElement('div')
    pixel.classList.add("pixel");
    pixel.style.backgroundColor = 'white';
    screen.appendChild(pixel);
  }
  screen.style.gridTemplateColumns =  `repeat(${screenSize}, auto)`;
  screen.style.gridTemplateRows =  `repeat(${screenSize}, auto)`;
}

  drawGrid(16);

function colorWhite() {
  let pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pxl => {
    pxl.addEventListener('mouseover', (e) => {
      pxl.style.backgroundColor = "white"
    })
  })
}

function colorBlack() {
  let pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pxl => {
    pxl.addEventListener('mouseover', (e) => {
      pxl.style.backgroundColor = "black"
    })
  })
}

function colorRandom() {
  let pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pxl => {
    pxl.addEventListener('mouseover', (e) => {
      pxl.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    })
  })
}

function resize() {
  gridsize = prompt('please enter a new grid size of not more than 100, or lower than 2', 50);
  if(gridsize > 100 || gridsize === null || gridsize < 2){
  gridsize = 16;
}
screen.innerHTML = '';
drawGrid(gridsize);
}

function reset() {
  let pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pxl => {
    pxl.style.backgroundColor = "white";
  })
}

