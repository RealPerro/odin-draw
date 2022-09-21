//initialize app
let size = 16;
let pixelheight;
let pixelwidth;
const colorList = ["blue","indigo",  "green", "red", "yellow", "gray",
                 "pink", "lightblue", "palegreen", "white", "orange", "lavender"]


const slider1 = document.querySelector("#slider1");
slider1.addEventListener("change", updateSlider);

const create1 = document.querySelector("#create-grid");
create1.addEventListener("click", buildGrid);

const gridContainer = document.querySelector(".grid-container");

const colorContainer = document.querySelector("#color-container");




//functions
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
        newButton.classList.add("not-selected");
        newButton.classList.add("color-button");
        newButton.style.backgroundColor = ""+c;
        newButton.textContent = ""+c;

        colorContainer.appendChild(newButton)


    }
}


buildColors()