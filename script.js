let rainbowBtn = document.getElementById("rainbow-btn");
let blackBtn = document.getElementById("black-btn");
let eraseBtn = document.getElementById("erase-btn");
let gridInput = document.getElementById("grid-input");
let gridSize = document.getElementById("grid-size");

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

let colorPicker = document.getElementById("color-picker");
console.log(colorPicker.value)