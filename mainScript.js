//initialize app
let size = 16;
let pixelheight;
let pixelwidth;
const colorList = ["blue","indigo",  "green", "red", "yellow", "gray",
                 "pink", "lightblue", "palegreen", "black", "orange", "lavender", "white"]

let currentColor;
let currentIntensity;

//asign elements to variables
const slider1 = document.querySelector("#slider1");
const create1 = document.querySelector("#create-grid");
const gridContainer = document.querySelector(".grid-container");
const colorContainer = document.querySelector("#color-container");

const pencilButton = document.querySelector("#pencilButton");
const sharpieButton = document.querySelector("#sharpieButton");
const eraserButton = document.querySelector("#eraserButton");


//add event listeners for grid build
slider1.addEventListener("change", updateSlider);
create1.addEventListener("click", buildGrid);

//create color buttons and assign to variable
buildColors()
const colorButtonList = document.querySelectorAll(".color-button");

//add event listeners for tools buttons
pencilButton.addEventListener("click", activatePencil);
sharpieButton.addEventListener("click", activateSharpie);
eraserButton.addEventListener("click", activateEraser);

//add event listeners for color buttons
colorButtonList.forEach(addClickListener);

//build initial grid and assign pixels to variable
buildGrid()
const pixelList = document.querySelectorAll(".drawGrid");

//add event listener for grid divs for painting
pixelList.forEach(addPaintListener);

//functions
function addPaintListener() {
    this.addEventListener("click", paintPixel);
}

function addClickListener() {
    this.addEventListener("click", activateColor);
}

function paintPixel(e) {
    //console.log(e.path[0].backgroundColor);
    e.path[0].backgroundColor = "black";
    e.path[0].opacity += currentIntensity;
}

function buildGrid() {
    console.log("build");
    console.log(slider1.value);
    pixelheight = (document.querySelector(".grid-container").clientHeight / size);
    pixelwidth = (document.querySelector(".grid-container").clientWidth / size);
    let n = slider1.value;
    gridContainer.innerHTML="";
    for (i = 0; i < n*n; i++) {
        let newDiv = document.createElement('div')
        newDiv.classList.add("drawGrid");
        newDiv.id = `grid_${i}`;
        newDiv.style.height = pixelheight+"px";
        newDiv.style.width = pixelwidth+"px";
        gridContainer.appendChild(newDiv)
    }
}

function updateSlider(e) {
    document.querySelector("#slider-value").textContent = this.value; 
    size = this.value; 
}

function buildColors() {
    for (c of colorList) {
        console.log(c)
        let newButton = document.createElement('button');
        newButton.classList.add("color-button");
        newButton.style.backgroundColor = ""+c;
        newButton.id = ""+c;
        newButton.textContent = ""+c;
        colorContainer.appendChild(newButton)
    }
}

function activatePencil() {
    console.log("pencil activated");
    currentIntensity = 0.1;
    pencilButton.classList.add("active");
    sharpieButton.classList.remove("active");
    eraserButton.classList.remove("active");
}

function activateSharpie() {
    console.log("sharpie activated");
    currentIntensity = 1;
    pencilButton.classList.remove("active");
    sharpieButton.classList.add("active");
    eraserButton.classList.remove("active");
}

function activateEraser() {
    console.log("eraser activated");
    currentIntensity = -1;
    pencilButton.classList.remove("active");
    sharpieButton.classList.remove("active");
    eraserButton.classList.add("active");

}

function activateColor(e) {
    console.log(e);
    colorButtonList.forEach((element) => {element.classList.remove("active")});
    e.path[0].classList.add("active");
    currentColor = `${e.path[0].id}`;
    console.log(currentColor);
}