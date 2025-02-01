let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Function to show slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

// Function for next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Function for previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Initial display
showSlide(currentIndex);
