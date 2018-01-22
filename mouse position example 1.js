var canvas, ctx, mousePos;

window.onload = function init() {
    canvas = document.querySelector("#canvasId");
    ctx = canvas.getContext('2d');

    canvas.addEventListener('mousemove', function (event) {
        mousePos = getMousePos(canvas, event);
        var message = mousePos.x + ',' + "" + mousePos.y;
        writeMessage(canvas, message);
    }, false);
};

function getMousePos(canvas, event) {
    // necessary to take into account CSS boudaries
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function writeMessage(canvas, message) {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText(message, 10, 25);
    ctx.restore();
}


