// JavaScript code for interactive features
document.addEventListener("DOMContentLoaded", function () {
    // JavaScript for handling the reservation form submission
    const reservationForm = document.getElementById("reservation-form");

    reservationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // You can add code here to handle form submission, send email confirmation, etc.
        alert("Reservation submitted successfully!");
        reservationForm.reset();
    });

    // JavaScript for the gallery image slider
    const slideImages = document.querySelectorAll(".img-container");
    let currentSlide = 0;

    function showSlide(slideIndex) {
        slideImages.forEach((image, index) => {
            if (index === slideIndex) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slideImages.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slideImages.length - 1;
        }
        showSlide(currentSlide);
    }

    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Automatically switch slides every 5 seconds (5000 milliseconds)
    setInterval(nextSlide, 5000);
});
