// Project: Etch-a-Sketch //



let pixelGridDOM = document.querySelector("#pixelGrid");
console.log(pixelGridDOM);

addPixel();



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
// 