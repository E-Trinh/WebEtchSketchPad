//Adds a grid of squares to the HTML file based on the number inputted
function addGrid(count) {
    const container = document.createElement("div");
    container.classList.toggle("container");

    for (let i = 0; i < count; i++) {
        const row = document.createElement("div");
        row.classList.toggle("row");
        for (let i = 0; i < count; i++) {
            const box = document.createElement("box");
            box.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "black";
            });
            box.classList.toggle("box")
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    document.querySelector("body").appendChild(container);
}

//create a button for redrawing the grid with a different number of rows and columns
const button = document.createElement("button");
button.textContent = "Change Grid";
button.classList.toggle("button");
button.addEventListener("click", () => {
    const count = prompt("How many rows and columns do you want for the square grid? Enter the number of columns or rows as a number. Max: 100");
    if (count <= 100 && count > 0) {
        document.querySelector("body").removeChild(document.querySelector(".container"));
        addGrid(count);
    } else {
        alert("Invalid Number");
    }
});
document.querySelector("body").appendChild(button);

//draws the initial gridds
addGrid(16);