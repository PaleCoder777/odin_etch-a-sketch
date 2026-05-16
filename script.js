// Project: Etch-a-Sketch //

// Numbers for our initial 16x16 grid for 500 max width
const GRID_MAX_WIDTH = 500;
const gridSideAmount = 16;
const rowTotalBorderWidth = gridSideAmount * 2;
const pixelPadding = (GRID_MAX_WIDTH - rowTotalBorderWidth) / (gridSideAmount);
const pixelPaddingPerSide = pixelPadding / 2;
const totalSquares = gridSideAmount * gridSideAmount;
const pixelPaddingDOM = (`${pixelPaddingPerSide}px`);   

// Declare global variables for new grid generation
let newgridSideAmount;
let newTotalBorderWidth;
let newPixelPadding;
let newPixelPadPerSide;
let newTotalSquares;
let newPixelPaddingDOM;


// Reference grid section + make grid
let pixelGridDOM = document.querySelector("#pixelGrid");
addPixel(totalSquares, pixelPaddingDOM);

// Reference all pixels, turn to an array
let pixelDOM = document.querySelectorAll(".pixel");
pixelDOM = [...pixelDOM];
givePixelListener();

// Loop array to give all pixels listeners
// pixels change when mouse enter/leave


function givePixelListener(){
    for (let item of pixelDOM) {
        item.addEventListener("mouseenter", () => {
            item.classList.add("filled");
            item.classList.add("inside");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("inside");
        });
    }
}

// Button prompt user for #, remove grid, add grid
let newGridDOM = document.querySelector("#newGrid");
newGridDOM.addEventListener("click", () => {
    newgridSideAmount = +prompt(`The new grid will have # of pixels on each side, please select this new #: \n (pick from range 16-100)`, 0);
    newTotalSquares = (newgridSideAmount * newgridSideAmount);
    
    for (let pixel of pixelDOM) {
        pixelGridDOM.removeChild(pixel);
    }

    // New values generated from user prompt
    newTotalBorderWidth = (newgridSideAmount * 2);
    newPixelPadding = (GRID_MAX_WIDTH - newTotalBorderWidth) / (newgridSideAmount);
    newPixelPadPerSide = (newPixelPadding / 2);
    newPixelPaddingDOM = (`${newPixelPadPerSide}px`);

    addPixel(newTotalSquares, newPixelPaddingDOM);
    pixelDOM = document.querySelectorAll(".pixel");
    pixelDOM = [...pixelDOM];
    givePixelListener();
});

function addPixel(totalSquares, pixelPadding) {
    for (let i = 1; i <= totalSquares; i++) {
        let newPixelDOM = document.createElement("div");
        newPixelDOM.classList = ("pixel");
        newPixelDOM.style.padding = pixelPadding;
        pixelGridDOM.appendChild(newPixelDOM);
    }
}