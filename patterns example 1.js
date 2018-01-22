
var canvas, ctx, pattern;
function init() {
    canvas = document.querySelector("#canvasId");
    ctx = canvas.getContext('2d');
    var image = new Image();
    image.onload() = function () {
        pattern = ctx.createPattern(image, "repeat");
        ctx.fillStyle = pattern;
        ctx.fillRect(10, 10, 200, 200);    // textured rectangle

        ctx.lineWidth = 20;                // wireframe rectangle
        ctx.strokeStyle = pattern;
        ctx.strokeRect(230, 20, 150, 100);
    };
    image.src = "http://www.dreamstime.com/colourful-flowers-repeatable-pattern-thumb18692760.jpg";
}