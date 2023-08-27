"use strict";
const images = document.querySelectorAll(".scaled-image");
let currentIndex = 0;

// hiding the images
function showImage(index) {
  images.forEach((image) => {
    image.style.display = "none";
  });
  images[index].style.display = "block";
}

// forward motion
document.getElementById("forward").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// backward motion
document.getElementById("backward").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

showImage(currentIndex);
