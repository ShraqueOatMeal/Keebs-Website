// JavaScript source code
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-51px";
    }
    prevScrollpos = currentScrollPos;
};

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
};

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
};
