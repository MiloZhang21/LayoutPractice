window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("titleOne");
    image.style.transform = "rotate(" + window.pageYOffset/3 + "deg)";
}


