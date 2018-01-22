
var canvas, ctx;

function init() {
    canvas = document.querySelector("#canvasId");
    redRectangle();

}

function redRectangle() {

    ctx = canvas.getContext('2d');

    ctx.fillStyle='red';

    ctx.fillRect(0,0,80,100);
}
