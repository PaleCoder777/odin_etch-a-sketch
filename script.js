// Project: Etch-a-Sketch //


// Reference grid section + make grid
let pixelGridDOM = document.querySelector("#pixelGrid");
console.log(pixelGridDOM);
addPixel();

// Reference all pixels, turn to an array
let pixelDOM = document.querySelectorAll(".pixel");
pixelDOM = [...pixelDOM];

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



// Functions
function addPixel() {
    
    for (let i = 1; i <= 256; i++) {
        let newPixelDOM = document.createElement("div");
        newPixelDOM.classList = ("pixel");
        pixelGridDOM.appendChild(newPixelDOM);
    }
        
}



// Project Considerations/Logic Errors:
// (-) Hard coding the padding will only work for one scenario
// (?) How to make event delegation work to avoid eventlistener spam?