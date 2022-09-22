//initialize app
let size = 16;
let pixelheight;
let pixelwidth;
let pixelList;
let isMouseDown;

forty2 = document.querySelector("body");
forty2.addEventListener("mousedown", function() {isMouseDown = true;})
forty2.addEventListener("mouseup", function() {isMouseDown = false;})

const colorList = ["red", "pink", "orange", "yellow", "palegreen",
     "green", "blue", "lightblue", "lavender", "indigo", "white", "gray", "black"]

let currentColor = "black";
let currentIntensity;

//asign initial elements to variables
const slider1 = document.querySelector("#slider1");
const create1 = document.querySelector("#create-grid");
const gridContainer = document.querySelector(".grid-container");
const colorContainer = document.querySelector("#color-container");

const pencilButton = document.querySelector("#pencilButton");
const sharpieButton = document.querySelector("#sharpieButton");


//add event listeners for grid build
slider1.addEventListener("change", updateSlider);
create1.addEventListener("click", buildGrid);

//create color buttons and assign to variable and add event listeners for color buttons
buildColors()
const colorButtonList = document.querySelectorAll("#color-container > .color-button");
colorButtonList.forEach(function(i) {
    i.addEventListener('click', activateColor)});

//add event listeners for tools buttons
pencilButton.addEventListener("click", activatePencil);
sharpieButton.addEventListener("click", activateSharpie);

//build initial grid 
buildGrid()

//initialize sharpie
activateSharpie()

//functions
function paintPixel(e) {
    if ( isMouseDown == true) {
        console.log("paintpixel mousedown");
        if (this.style.backgroundColor == currentColor) {
            this.style.opacity = currentIntensity + parseFloat(this.style.opacity);
        }
        else {
            this.style.backgroundColor = currentColor;
            this.style.opacity = currentIntensity;
        } 
    } else {console.log("paintpixel mousedoup");}
}

function paintPixel2(e) {
    console.log("paintpixel2");
    if (this.style.backgroundColor == currentColor) {
            this.style.opacity = currentIntensity + parseFloat(this.style.opacity);
        }
    else {
            this.style.backgroundColor = currentColor;
            this.style.opacity = currentIntensity;
        } 
    } 

function buildGrid() {
    //console.log("build");
    //console.log(slider1.value);
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
        newDiv.style.opacity = 1;
        newDiv.style.backgroundColor = "white";
        gridContainer.appendChild(newDiv)
    }
    pixelList = document.querySelectorAll(".drawGrid");
    //add event listener for grid divs for painting
    pixelList.forEach(function(i) {
        i.addEventListener('mouseover', paintPixel);
        i.addEventListener('mousedown', paintPixel2);
    });
}

function updateSlider(e) {
    document.querySelector("#slider-value").textContent = this.value; 
    size = this.value; 
}

function buildColors() {
    for (c of colorList) {
        //console.log(c)
        let newButton = document.createElement('button');
        newButton.classList.add("color-button");
        newButton.style.backgroundColor = ""+c;
        newButton.id = ""+c;
        newButton.textContent = ""+c;
        colorContainer.appendChild(newButton)
    }
    document.querySelector("#black").classList.add("active");
}

function activatePencil() {
    console.log("pencil activated");
    currentIntensity = 0.2;
    pencilButton.classList.add("active");
    sharpieButton.classList.remove("active");
}

function activateSharpie() {
    console.log("sharpie activated");
    currentIntensity = 1;
    pencilButton.classList.remove("active");
    sharpieButton.classList.add("active");
}


function activateColor(e) {
    console.log(`${this.id} color activated`);
    colorButtonList.forEach((element) => {element.classList.remove("active")});
    this.classList.add("active");
    currentColor = `${this.id}`;
}