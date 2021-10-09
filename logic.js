//Selecting
let canvaSize = document.querySelector("#canvaSize");
let container = document.querySelector(".container");
let clearBtn = document.querySelector("#clear");
let divs = document.querySelectorAll(".container > div");
let eraser = document.querySelector("#eraser");

//Main function on start
main();

function main(e){
    changeGridSize(e);
    addColor();
    clear();
}

//Change Canvas Size with input #canvaSize
canvaSize.addEventListener("input", (e) => main(e));
    
function changeGridSize(e) {
    container.innerHTML = "";
    let size;
    (e==undefined)? (size = canvaSize.value) : (size = e.target.value);
    container.style.gridTemplateColumns = `repeat(${size}, 1fr`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr`;
    for (let index = 0; index < size*size; index++) {
        container.appendChild(document.createElement("div"))
    }
}
    
//Pick pointer color and add color to canvas
let colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("input", addColor);

function addColor() {
    eraseModeOff();
    //Pick new color
    divs = document.querySelectorAll(".container > div");
    divs.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = colorPicker.value;
        })
    })
}

//Clear canvas
function clear() {
    clearBtn.addEventListener("click", clearCanvas)

    function clearCanvas() {
        divs.forEach((div) => {
            div.style.backgroundColor = "white";
        })
    }
}

//Eraser button
eraser.addEventListener("click", eraseMode);

function eraseMode() {
    eraser.classList.add("active");
    divs = document.querySelectorAll(".container > div");
    divs.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "white";
        })
    })
}
function eraseModeOff() {
    eraser.classList.remove("active");
}