let size = 16;
let pixelheight;
let pixelwidth;

const slider1 = document.querySelector("#slider1");
slider1.addEventListener("change", updateSlider);

const create1 = document.querySelector("#create-grid");
create1.addEventListener("click", buildGrid);

function buildGrid() {
    console.log("build");
    console.log(slider1.value);
    pixelheight = (document.querySelector(".grid-container").clientHeight / size);
    pixelwidth = (document.querySelector(".grid-container").clientWidth / size);
    let n = slider1.value;
    document.querySelector(".grid-container").innerHTML="";
    for (i = 0; i < n*n; i++) {
        let newDiv = document.createElement('div')
        newDiv.classList.add("drawGrid");
        newDiv.style.height = pixelheight+"px";
        newDiv.style.width = pixelwidth+"px";
        document.querySelector(".grid-container").appendChild(newDiv)
    }
}

function updateSlider(e) {
    document.querySelector("#slider-value").textContent = this.value; 
    size = this.value; 
}
