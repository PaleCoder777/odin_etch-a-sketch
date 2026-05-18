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