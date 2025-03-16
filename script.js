document.addEventListener("DOMContentLoaded", function () {
    let welcomeElement = document.querySelector(".hero-title");
    const welcomeText = "Welcome to My Portfolio.";
    let index = 0;

    function typeEffect() {
        if (index < welcomeText.length) {
            welcomeElement.textContent += welcomeText.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    welcomeElement.textContent = "";
    typeEffect();

    // افکت اسکرول برای نمایش سکشن‌ها
    const sections = document.querySelectorAll(".content");
    window.addEventListener("scroll", function () {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    });
});
