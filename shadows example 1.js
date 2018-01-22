
var canvas, ctx;
function init() {
    canvas = document.querySelector("canvasId");
    ctx = canvas.getContext('2d');
    setShadow();    // all drawings that will occur will cast shadows
    ctx.fillStyle = "#22FFDD";      // for top green filled rectangle
    ctx.fillRect(20, 20, 200, 100);

    ctx.strokeStyle = "purple";     // for bottom stroked rectangle
    ctx.lineWidth=10;
    ctx.strokeRect(20, 150, 200, 100);
}