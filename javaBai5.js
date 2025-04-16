
    let currentSlide = 0;
    const slides = document.getElementsByClassName("slide");

    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].style.display = "block";
    }

    function changeSlide(n) {
        showSlide(currentSlide + n);
    }
    showSlide(currentSlide);
