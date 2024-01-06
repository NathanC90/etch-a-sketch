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

// show initial grid size
gridSize.textContent = `${gridInput.value} x ${gridInput.value}`;

// show default color
hex.textContent = colorPicker.value;

// show current color
colorPicker.addEventListener('input', function(){
    currentColor.textContent = colorPicker.value;
});

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

function eraseColors(){
    let newGrid = document.querySelectorAll(".newGrid");

    for (let elem of newGrid) {
        elem.addEventListener('mouseenter', () => {
            elem.style.backgroundColor = "";
        })
    }
}

rainbowBtn.addEventListener('click', function() {
    setRandomColors();
})

colorBtn.addEventListener('click', function() {
    setCurrentColor();
})

eraseBtn.addEventListener('click', function() {
    eraseColors();
})

//show current grid size
gridInput.addEventListener('input', function(){
    let row = gridInput.value;
    let column = gridInput.value;
    gridSize.textContent = `${row} x ${column}`;
})

function setGridSize(num) {
    for(let i = 0; i < num * num; i++) {
        doodleBoard.innerHTML += `<div class="newGrid"></div>`;
    }
}

clearBtn.addEventListener('click', function(){
    document.querySelectorAll(".newGrid").forEach(el => {
        el.style.backgroundColor = "white";
    });
});