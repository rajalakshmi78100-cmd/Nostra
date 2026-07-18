// Close Offer

var closeOffer = document.getElementById("close-offer");
var offer = document.getElementById("offer");

closeOffer.addEventListener("click", function () {
    offer.style.display = "none";
});


// Mobile Menu

var menuIcon = document.getElementById("menuicon");
var sideMenu = document.getElementById("sidemenu");
var closeMenu = document.getElementById("closemenu");

menuIcon.addEventListener("click", function () {
    sideMenu.style.right = "0";
});

closeMenu.addEventListener("click", function () {
    sideMenu.style.right = "-100%";
});

// ---------------- HERO SLIDER ----------------

var images = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg",
    "images/slide4.jpg"
];

var index = 0;
var slider = document.getElementById("slider");

function showImage() {
    slider.src = images[index];
}

function nextImage() {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    showImage();
}

function previousImage() {
    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    showImage();
}

// Auto Slide every 3 seconds
setInterval(nextImage, 3000);