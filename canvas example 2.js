var canvas, ctx;

function init() {
    canvas = document.querySelector("#canvasId");

    rectangle();
}

function rectangle() {
    ctx = canvas.getContext('2d');
    ctx.lineWidth = 3px;
    ctx.strokeStyle = 'blue';
    ctx.strokeRect(10,10,150,150);
}