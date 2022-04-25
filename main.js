const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

let pixel; 
let gridsize = 50;

function drawGrid (screenSize) {
  for (let i=0; i < screenSize**2; i++) {
    pixel = document.createElement('div');
    pixel.classList.add("pixel");
    pixel.addEventListener('mouseover', () => {
      pixel.style.backgroundColor = 'black';
    })
    pixel.style.backgroundColor = 'white'
    screen.appendChild(pixel);
  }
  screen.style.gridTemplateColumns = `repeat(${screenSize}, auto)`;
  screen.style.gridTemplateRows = `repeat(${screenSize}, auto)`;
}

  drawGrid(2);

  function clear (request) {
    if(request === 'resize'){
      gridsize = prompt('please enter a new grid size of not more than 100', 50);
      if(gridsize > 100 || gridsize === null){
      gridsize = 100;
    }
    }
    screen.innerHTML = '';
    drawGrid(gridsize);
  }





/*
function drawGrid (screenSize) {
  for(i = 0; i < screenSize ** 2; i++) {
    pixel = document.createElement('div')
    pixel.classList.add("pixel");
    pixel.style.backgroundColor = 'white';
    screen.appendChild(pixel);
    
  }
  screen.style.gridTemplateColumns = `repeat(${screenSize}, auto)`; 
  screen.style.gridTemplateRows =  `repeat(${screenSize}, auto)`;
  
}

drawGrid(5);  */