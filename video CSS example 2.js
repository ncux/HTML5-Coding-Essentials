

var video = document.querySelector("#videoId");

function init() {                                    // function called when the page is loaded

    video.width = window.innerWidth;                // For initial value
    video.height = window.innerHeight;

    window.onresize = function() {                  // For dealing with window resize
        video.width = window.innerWidth;
        video.height = window.innerHeight;
    };
}
