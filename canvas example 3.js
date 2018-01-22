
var canvas = document.querySelector('#canvasId');
var ctx = canvas.getContext('2d');

function init() {
    ctx.lineWidth = 5;
    ctx.fillStyle = red;
    ctx.strokeStyle = blue;
    ctx.font = 'italic 20pt Calibri';

    // Draw the two filled red rectangles
    ctx.fillRect(10,30,70,150);
    ctx.fillRect(110,30,70,150);

    // Draw the two blue wireframe rectangles
    ctx.strokeRect(10,30,70,150);
    ctx.strokeRect(110,30,70,150);

    ctx.fillText("Hi", 70, 22);

}