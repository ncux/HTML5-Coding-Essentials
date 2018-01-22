function initPreferences() {
    // add an input listener to all input fields
    var listOfInputsInForm = document.querySelectorAll("input");
    for(var i= 0; i < listOfInputsInForm.length; i++) {
        addInputListener(listOfInputsInForm[i]);
    }

    // restore preferences
    restorePreferences();

    applyGUIvalues();
}

function addInputListener(inputField) {
    inputField.addEventListener('input', function(event) {
        localStorage.setItem(inputField.id, inputField.value);
    }, false);
}

function restorePreferences() {
    // get the list of all input elements in the form
    var listOfInputsInForm = document.querySelectorAll("input");

    // For each input element,
    //    - get its id (that is also the key for it's saved content
    //      in the localStorage)
    //    - get the value associated with the id/key in the local
    //      storage
    //    - If the value is not undefined, restore the value
    //      of the input field
    for(var i= 0; i < listOfInputsInForm.length; i++) {
        var fieldToRestore = listOfInputsInForm[i];
        var id = fieldToRestore.id;
        var savedValue = localStorage.getItem(id);

        if(savedValue !== undefined) {
            fieldToRestore.value = savedValue;
        }
    }
}

function applyGUIvalues() {
    var sizeWidget = document.querySelector("#size");
    size = Math.sign(incX)*parseInt(sizeWidget.value);
    document.querySelector("#sizeValue").innerHTML = size;

    var colorWidget = document.querySelector("#color");
    ctx.fillStyle = colorWidget.value;

    var speedWidget = document.querySelector("#speed");
    incX = Math.sign(incX)*parseInt(speedWidget.value);
    document.querySelector("#speedValue").innerHTML = Math.abs(incX);

    var lineWidthWidget = document.querySelector("#lineWidth");
    ctx.lineWidth = parseInt(lineWidthWidget.value);
}
