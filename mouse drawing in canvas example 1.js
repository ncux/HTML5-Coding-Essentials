
var canvas, ctx, previousMousePos;
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function draw(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function handleMouseMove(event) {
    var mousePos = getMousePos(canvas, event);
    // draw lines that follow the mouse pos
    if (!started) {
        previousMousePos = mousePos;
        started = true;
    } else {
        draw(previousMousePos.x, previousMousePos.y,
            mousePos.x, mousePos.y);

        previousMousePos = mousePos;
    }
}

// define a variable started=false;
// as we cannot draw any line before the mouse moved
// (we need at least two consecutive positions)

window.onload = function () {
    canvas = document.querySelector('#canvasId');
    ctx = canvas.getContext('2d');
    started = false;

    canvas.addEventListener('mousemove', handleMouseMove, false);
};