// Button elements
let rainbowBtn = document.getElementById("rainbow-btn");
let blackBtn = document.getElementById("black-btn");
let eraseBtn = document.getElementById("erase-btn");
let clearBtn = document.getElementById("clear-btn");

// Input elements
let gridInput = document.getElementById("grid-input");
let colorPicker = document.getElementById("color-picker");

// Doodle elements
let doodleBoard = document.getElementById("doodle-board");
let gridSize = document.getElementById("grid-size");
let newGrid = document.querySelectorAll(".newGrid");

// show initial grid size
gridSize.textContent = `${gridInput.value} x ${gridInput.value}`;

rainbowBtn.addEventListener('click', function() {
    alert("I got clicked!");
})

blackBtn.addEventListener('click', function() {
    alert("black button is clicked!");
})

eraseBtn.addEventListener('click', function() {
    alert("Erase button is clicked!");
})
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