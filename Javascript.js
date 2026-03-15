let paintColor = 'rgb(255, 0, 0)';
document.addEventListener("DOMContentLoaded", function() {
    const row = document.querySelector('.Row');
    for (let i = 0; i < Math.pow(40, 2) + 20; i++) {
        const square = document.createElement("div");
        square.setAttribute("draggable", "false");
        square.classList.add("square");
        square.addEventListener("mouseover", function() {
            if (mousedown) {
                square.style.backgroundColor = paintColor;
            }
        });
        square.addEventListener("click", function() {
            square.style.backgroundColor = paintColor;
        });
        row.appendChild(square);
    }
});

let mousedown = false;
document.addEventListener("mousedown", function() {
    mousedown = true;
});
document.addEventListener("mouseup", function() {
    mousedown = false;
});

const objects = ".red, .blue, .green, .normal, .yellow, .magenta, .cyan, .black";
document.querySelectorAll(objects).forEach(paint => {
    paint.addEventListener("click", function() {
        paintColor = getComputedStyle(paint).backgroundColor;
    });
});