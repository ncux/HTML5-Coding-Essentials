var canvas = document.querySelector("#canvasId");
var div = document.querySelector("#divId");
var ctx = canvas.getContext('2d');

function init() {
    window.addEventListener('resize', resizeCanvas, false);
    draw();
}

function resizeCanvas() {
    canvas.width = div.clientWidth;
    canvas.height = div.clientHeight;
    draw();
}

function draw() {
    // draw two diagonal lines
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, 0);
    ctx.strokeStyle = 'teal';
    ctx.stroke();
}