// Wait for the page to load fully
window.addEventListener("load", function () {
  // Get the menu element and vertical divider
  const menu = document.querySelector(".menu");
  const verticalDivider = document.querySelector(".vertical-divider");

  // Add the 'animate' class to trigger animation
  if (menu) menu.classList.add("animate");
  if (verticalDivider) verticalDivider.classList.add("animate");
});

// Set the date for grand opening
const grandOpeningDate = new Date("November 1, 2024 00:00:00").getTime();
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = grandOpeningDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display countdown in respective elements
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If countdown is over
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("grand-opening-div").innerHTML =
      "<h1>We're live!</h1>";
  }
}, 1000);

// Sidebar toggle functionality
const sideBarLeft = document.getElementById("sideBarLeft");
const sideBarRight = document.getElementById("sideBarRight");
const openLeftBtn = document.getElementById("openLeft");
const openRightBtn = document.getElementById("openRight");

if (openLeftBtn && sideBarLeft) {
  openLeftBtn.addEventListener("click", () => {
    sideBarLeft.classList.toggle("open");
    openLeftBtn.innerHTML = sideBarLeft.classList.contains("open")
      ? '<i class="fa-solid fa-times"></i>'
      : '<i class="fa-solid fa-play"></i>';
  });
}

if (openRightBtn && sideBarRight) {
  openRightBtn.addEventListener("click", () => {
    sideBarRight.classList.toggle("open");
    openRightBtn.innerHTML = sideBarRight.classList.contains("open")
      ? '<i class="fa-solid fa-times"></i>'
      : '<i class="fa-solid fa-play"></i>';
  });
}

// Lightbox and Gallery Functionality
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const thumbnailGallery = document.querySelector(".thumbnail-gallery");
let currentImageIndex = 0;
let autoPlayInterval;

// Function to open lightbox
function openLightbox(index) {
  lightbox.style.display = "block";
  lightboxImage.src = galleryImages[index].src;
  currentImageIndex = index;
  displayThumbnails();
}

// Show the previous image
function showPrevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImage.src = galleryImages[currentImageIndex].src;
}

// Show the next image
function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  lightboxImage.src = galleryImages[currentImageIndex].src;
}

// Function to display thumbnails
function displayThumbnails() {
  thumbnailGallery.innerHTML = "";
  galleryImages.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.classList.add("thumbnail");
    thumbnail.addEventListener("click", () => {
      lightboxImage.src = image.src;
      currentImageIndex = index;
    });
    thumbnailGallery.appendChild(thumbnail);
  });
}

// Auto-play feature
function startAutoPlay() {
  autoPlayInterval = setInterval(showNextImage, 6000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Lightbox Event Listeners
galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    openLightbox(index);
    startAutoPlay();
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  stopAutoPlay();
});

prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

// Thumbnail scrolling
const thumbPrevBtn = document.getElementById("thumbPrevBtn");
const thumbNextBtn = document.getElementById("thumbNextBtn");

thumbPrevBtn.addEventListener("click", () => {
  thumbnailGallery.scrollBy({ left: -200, behavior: "smooth" });
});

thumbNextBtn.addEventListener("click", () => {
  thumbnailGallery.scrollBy({ left: 200, behavior: "smooth" });
});

// Close lightbox with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
    stopAutoPlay();
  }
});
const imageGallery_galleryImages = document.querySelectorAll(
  ".imageGallery_galleryImg"
);
const imageGallery_lightboxModal = document.getElementById(
  "imageGallery_lightboxModal"
);
const imageGallery_lightboxImage = document.getElementById(
  "imageGallery_lightboxImage"
);
const imageGallery_closeBtn = document.querySelector(".imageGallery_close");
const imageGallery_prevBtn = document.getElementById("imageGallery_prevBtn");
const imageGallery_nextBtn = document.getElementById("imageGallery_nextBtn");
const imageGallery_thumbnailGallery = document.querySelector(
  ".imageGallery_thumbnailGallery"
);
let imageGallery_currentImageIndex = 0;

// Function to open lightbox
function imageGallery_openLightbox(index) {
  imageGallery_lightboxModal.style.display = "block";
  imageGallery_lightboxImage.src = imageGallery_galleryImages[index].src;
  imageGallery_currentImageIndex = index;
  imageGallery_displayThumbnails();
}

// Show the previous image
function imageGallery_showPrevImage() {
  imageGallery_currentImageIndex =
    (imageGallery_currentImageIndex - 1 + imageGallery_galleryImages.length) %
    imageGallery_galleryImages.length;
  imageGallery_lightboxImage.src =
    imageGallery_galleryImages[imageGallery_currentImageIndex].src;
}

// Show the next image
function imageGallery_showNextImage() {
  imageGallery_currentImageIndex =
    (imageGallery_currentImageIndex + 1) % imageGallery_galleryImages.length;
  imageGallery_lightboxImage.src =
    imageGallery_galleryImages[imageGallery_currentImageIndex].src;
}

// Function to display thumbnails
function imageGallery_displayThumbnails() {
  imageGallery_thumbnailGallery.innerHTML = "";
  imageGallery_galleryImages.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.classList.add("imageGallery_thumbnail");
    thumbnail.addEventListener("click", () => {
      imageGallery_lightboxImage.src = image.src;
      imageGallery_currentImageIndex = index;
    });
    imageGallery_thumbnailGallery.appendChild(thumbnail);
  });
}

// Auto-play feature (optional)
let imageGallery_autoPlayInterval;
function imageGallery_startAutoPlay() {
  imageGallery_autoPlayInterval = setInterval(imageGallery_showNextImage, 6000);
}

function imageGallery_stopAutoPlay() {
  clearInterval(imageGallery_autoPlayInterval);
}

// Lightbox Event Listeners
imageGallery_galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    imageGallery_openLightbox(index);
    imageGallery_startAutoPlay();
  });
});

imageGallery_closeBtn.addEventListener("click", () => {
  imageGallery_lightboxModal.style.display = "none";
  imageGallery_stopAutoPlay();
});

imageGallery_prevBtn.addEventListener("click", imageGallery_showPrevImage);
imageGallery_nextBtn.addEventListener("click", imageGallery_showNextImage);

// Close lightbox with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    imageGallery_lightboxModal.style.display = "none";
    imageGallery_stopAutoPlay();
  }
});
// Function to check screen width and replace footer text
function updateFooterTextForMobile() {
  const footerText = document.getElementById("footer-text");

  // Check if the screen width is less than or equal to 768px
  if (window.innerWidth <= 768) {
    footerText.innerHTML = "&copy; 2024 Emberlight | 2024"; // Modify text for mobile
  }
}

// Run on initial load
updateFooterTextForMobile();

// Listen for window resize to handle dynamic screen size changes
window.addEventListener("resize", updateFooterTextForMobile);
function updateGrandOpeningText() {
  const grandOpeningDate = new Date("Nov 1, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = grandOpeningDate - now;

  // Calculate the days, hours, minutes, and seconds left
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the grand opening date text with the remaining time
  const openingText = document.getElementById("grand-opening-date");
  if (distance > 0) {
    openingText.innerHTML = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds left`;
  } else {
    openingText.innerHTML = "The event has started!";
  }

  // Update the countdown timer
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

// Update the countdown and text every second
setInterval(updateGrandOpeningText, 1000);
