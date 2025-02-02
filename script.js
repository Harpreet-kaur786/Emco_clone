let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const carousel = document.querySelector(".carousel");
let autoSlideInterval;

/* Function to Show Slide */
function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/* Next Slide */
function nextSlide() {
    showSlide(currentIndex + 1);
}

/* Previous Slide */
function prevSlide() {
    showSlide(currentIndex - 1);
}

/* Auto-slide every 5 seconds */
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

/* Pause Auto-Slide on Hover */
document.querySelector(".carousel-container").addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
});

document.querySelector(".carousel-container").addEventListener("mouseleave", () => {
    startAutoSlide();
});

/* Start Auto-slide */
startAutoSlide();


function openGoogleMaps() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          let userLat = position.coords.latitude;
          let userLng = position.coords.longitude;
          let showroomLocation = "Ensuite+Showroom+London"; // Google Maps readable format

          // Open Google Maps with directions from user's location
          let mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${showroomLocation}`;
          window.open(mapsUrl, "_blank");
      }, error => {
          alert("Location access is required to show directions.");
      });
  } else {
      alert("Geolocation is not supported by this browser.");
  }
}
