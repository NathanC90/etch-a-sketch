// Button elements
let rainbowBtn = document.getElementById("rainbow-btn");
let blackBtn = document.getElementById("black-btn");
let eraseBtn = document.getElementById("erase-btn");

// Input elements
let gridInput = document.getElementById("grid-input");
let colorPicker = document.getElementById("color-picker");

// Doodle elements
let doodleBoard = document.getElementById("doodle-board");
let gridSize = document.getElementById("grid-size");
let row = gridInput.value;
let column = gridInput.value;

console.log(`Row: ${row} Column: ${column}`);

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
    gridSize.textContent = `${gridInput.value} x ${gridInput.value}`;
})
gridSize.textContent = `${gridInput.value} x ${gridInput.value}`;

function setGridSize(row, column){
    for(let i = 0; i < row; i++) {
        doodleBoard.innerHTML += `<div class="newGrid"></div>`;
        for(let j = 0; j < column; j++) {
            doodleBoard.innerHTML += `<div class="newGrid"></div>`;
        }
    }
}