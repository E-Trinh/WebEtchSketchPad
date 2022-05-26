const container = document.createElement("div");
container.classList.toggle("container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.toggle("row");
    for (let i = 0; i < 16; i++) {
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