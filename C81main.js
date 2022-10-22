canvas = document.getElementById("canvas_kill");
ctx = canvas.getContext("2d");
colour = "crimson";

ctx.beginPath();
ctx.strokeStyle = colour;

ctx.lineWidth = 5;
ctx.arc(200, 200, 50, 0, 360);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log(mouse_x,mouse_y)
    circle(mouse_x,mouse_y)
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 5;
ctx.arc(mouse_x, mouse_y, 50, 0, 360);
ctx.stroke();
}