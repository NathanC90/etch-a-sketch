// Button elements
let colorBtn = document.getElementById("color-btn");
let rainbowBtn = document.getElementById("rainbow-btn");
let eraseBtn = document.getElementById("erase-btn");
let clearBtn = document.getElementById("clear-btn");

// Input elements
let gridInput = document.getElementById("grid-input");
let colorPicker = document.getElementById("color-picker");
let hex = document.getElementById("hex");
let currentColor = colorPicker.value;

// Doodle elements
let doodleBoard = document.getElementById("doodle-board");
let gridSize = document.getElementById("grid-size");
let numberOfGrids = gridInput.value;

// show initial grid size
gridSize.textContent = `${numberOfGrids} x ${numberOfGrids}`;

// show default color
hex.textContent = colorPicker.value;

// show current color
colorPicker.addEventListener('input', function(){
    hex.textContent = colorPicker.value;
});

// show current grid size
gridInput.addEventListener('input', function(){
    let row = gridInput.value;
    let column = gridInput.value;
    numberOfGrids = gridInput.value;
    gridSize.textContent = `${row} x ${column}`;
    updateGridSize(numberOfGrids);
    console.log(numberOfGrids);
})

// show default grid size
doodleBoard.style.gridTemplateColumns = `repeat(${numberOfGrids} ,1fr)`;
setGridSize(numberOfGrids);

// generate random colors
function setRandomColors(){
    let newGrid = document.querySelectorAll(".newGrid");
    
    for (let elem of newGrid) {
        elem.addEventListener('mouseenter', () => {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16)
            elem.style.backgroundColor = `#${randomColor}`
        })
    };
}

// set the color as current color
function setCurrentColor(){
    let newGrid = document.querySelectorAll(".newGrid");

    for (let elem of newGrid) {
        elem.addEventListener('mouseenter', () => {
          elem.style.backgroundColor = `${colorPicker.value}`
        })
      };
}


// remove background color
function eraseColor(){
    let newGrid = document.querySelectorAll(".newGrid");

    for (let elem of newGrid) {
        elem.addEventListener('mouseenter', () => {
            elem.style.backgroundColor = "";
        })
    }
}

// Click to set to Rainbow Mode
rainbowBtn.addEventListener('click', function() {
    setRandomColors();
})

// Click to set to single color mode
colorBtn.addEventListener('click', function() {
    setCurrentColor();
})

// Click to set to Erase Mode
eraseBtn.addEventListener('click', function() {
    eraseColor();
})

// Click to remove all background colors
clearBtn.addEventListener('click', function(){
    document.querySelectorAll(".newGrid").forEach(el => {
        el.style.backgroundColor = "white";
    });
});

// default grid size
function setGridSize(num) {
    for(let i = 0; i < num * num; i++) {
        let newGrid = document.createElement('div');
        newGrid.className = "newGrid";
        doodleBoard.appendChild(newGrid);
    }
}

// Update grid size
function updateGridSize(num) {
    doodleBoard.innerHTML = '';
    for(let i = 0; i < num * num; i++) {
        let newGrid = document.createElement('div');
        newGrid.className = "newGrid";
        doodleBoard.appendChild(newGrid);
    }
    doodleBoard.style.gridTemplateColumns = `repeat(${numberOfGrids} ,1fr)`;
    doodleBoard.style.gridTemplateRows = `repeat(${numberOfGrids} ,1fr)`;
}