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

// Event Delegation for pixel Grid parent section
pixelGridDOM.addEventListener("mouseover", () => {
    let target = event.target;

    switch (target.id) {
        case ("pixel"):
            target.classList.add("filled");
            target.classList.add("inside");
            break;
    }
});

pixelGridDOM.addEventListener("mouseout", () => {
    let target = event.target;

    switch (target.id) {
        case ("pixel"):
            target.classList.remove("inside");
            break;
    }
});

// Button prompt user for #, remove grid, add grid
let newGridDOM = document.querySelector("#newGrid");

newGridDOM.addEventListener("click", () => {
    newgridSideAmount = +prompt(`The new grid will have # of pixels on each side, please select this new #: \n (pick from range 1-100)`, 0);

    // Limit the user input
    const minUserInput = 1;
    const maxUserInput = 100;
    if (newgridSideAmount < 1) newgridSideAmount = minUserInput;
    if (newgridSideAmount > 100) newgridSideAmount = maxUserInput;

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
});

function addPixel(totalSquares, pixelPadding) {
    for (let i = 1; i <= totalSquares; i++) {
        let newPixelDOM = document.createElement("div");
        newPixelDOM.classList = ("pixel");
        newPixelDOM.id = ("pixel"); // NEW, give each pixel id
        newPixelDOM.style.padding = pixelPadding;
        pixelGridDOM.appendChild(newPixelDOM);
    }
}