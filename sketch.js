//Adds a grid of squares to the HTML file based on the number inputted
function addGrid(count) {
    const container = document.createElement("div");
    container.classList.toggle("grid");

    for (let i = 0; i < count; i++) {
        const row = document.createElement("div");
        row.classList.toggle("row");
        for (let i = 0; i < count; i++) {
            const box = document.createElement("box");
            box.addEventListener("mouseover", (e) => {
                //set to a random rgb color
                const r = Math.random() * 256;
                const g = Math.random() * 256;
                const b = Math.random() * 256;
                const rgb = "rgb(" + r + "," + g + "," + b + ")";
                e.target.style.backgroundColor = rgb;
            });
            box.classList.toggle("box")
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    document.querySelector(".container").appendChild(container);
}

//create a button for redrawing the grid with a different number of rows and columns
const button = document.createElement("button");
button.textContent = "Change Grid";
button.classList.toggle("button");
button.addEventListener("click", () => {
    const count = prompt("How many rows and columns do you want for the square grid? Enter the number of columns or rows as a number. Max: 100");
    if (count <= 100 && count > 0) {
        document.querySelector(".container").removeChild(document.querySelector(".grid"));
        addGrid(count);
    } else {
        alert("Invalid Number");
    }
});
document.querySelector(".container").appendChild(button);

//draws the initial gridds
addGrid(16);