// Project: Etch-a-Sketch //

// Soft coding the padding style needed to fit in 500px max width
const GRID_MAX_WIDTH = 500;
const gridSideAmount = 16;
const rowTotalBorderWidth = gridSideAmount * 2;
const pixelPadding = (GRID_MAX_WIDTH - rowTotalBorderWidth) / (gridSideAmount);
const pixelPaddingPerSide = pixelPadding / 2;
console.log(pixelPaddingPerSide);

// DOM Style specific, make it string + px
let pixelPaddingDOM = (`${pixelPaddingPerSide}px`);
console.log(pixelPaddingDOM);

// Initial Grid Amount + declare a variable for new amount
let totalSquares = gridSideAmount * gridSideAmount;
console.log(gridSideAmount);
console.log(totalSquares);
let newgridSideAmount;
let newTotalSquares;



// Reference grid section + make grid
let pixelGridDOM = document.querySelector("#pixelGrid");
console.log(pixelGridDOM);
addPixel();

// Reference all pixels, turn to an array
let pixelDOM = document.querySelectorAll(".pixel");
pixelDOM = [...pixelDOM];
console.log(pixelDOM);

// Loop array to give all pixels listeners
// pixels change when mouse enter/leave
for (let item of pixelDOM) {
    item.addEventListener("mouseenter", () => {
        item.classList.add("filled");
        item.classList.add("inside");
    });

    item.addEventListener("mouseleave", () => {
        item.classList.remove("inside");
    });
}

// Button prompt user for #, remove grid, add grid
let newGridDOM = document.querySelector("#newGrid");
newGridDOM.addEventListener("click", () => {
    newgridSideAmount = +prompt(`The new grid will have # of pixels on each side, please select this new #: \n (pick from range 16-100)`, 0);
    console.log(newgridSideAmount);
    newTotalSquares = (newgridSideAmount * newgridSideAmount);
    console.log(newTotalSquares);
    for (let pixel of pixelDOM) {
        pixelGridDOM.removeChild(pixel);
    }

});






// Functions
function addPixel() {
    for (let i = 1; i <= 256; i++) {
        let newPixelDOM = document.createElement("div");
        newPixelDOM.classList = ("pixel");
        newPixelDOM.style.padding = pixelPaddingDOM;
        pixelGridDOM.appendChild(newPixelDOM);
    }
        
}



// Project Considerations/Logic Errors:
// (-) Hard coding the padding will only work for one scenario
// (?) How to make event delegation work to avoid eventlistener spam?