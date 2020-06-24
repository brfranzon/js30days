const canvas = document.querySelector("#draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx = canvas.getContext("2d");
//ctx.strokeStyle = "red";
ctx.lineJoin = "round";
ctx.lineCap = "round";

// Input for the size of the Line
let slider = document.getElementById("myRange");
let showLineWidth = document.getElementById("showLineWidth");

ctx.lineWidth = 50;
slider.addEventListener("mousemove", (e) => {
    ctx.lineWidth = e.target.value;
    showLineWidth.innerHTML = e.target.value;
});



let isDrawing = false;
let lastX = 0;
let lastY = 0;
let color = 0;

function draw(e) {
    if (!isDrawing) return;

    // change the color and width of the line
    ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
    ctx.beginPath();
    // go from
    ctx.moveTo(lastX, lastY);
    // to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    // update position to redraw
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // update color as we draw
    color++;
    if (color > 360) color = 0;

};

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];

});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseout", () => isDrawing = false);
canvas.addEventListener("mouseup", () => isDrawing = false);

