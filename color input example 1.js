
var color = document.querySelector("#colorId");
color.addEventListener('input', function () {
    document.body.style.backgroundColor = this.value;
}, false);