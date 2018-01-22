
var car = {
    "oem": "honda",
    "model": "accord"
};

// Store the object as a JSON String
localStorage.setItem("carKey", JSON.stringify(car));

// Retrieve the object from storage
var carInfo = JSON.parse(localStorage.getItem("carKey"));

console.log("The car is a " + "" + carInfo.oem + "" + carInfo.model);