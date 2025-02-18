document.addEventListener("DOMContentLoaded", function () {
    // Scroll smoothly to sections when clicking on navbar links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Login Button Click Event (Demo Function)
    document.querySelector(".login-btn").addEventListener("click", function () {
        alert("Login Feature Coming Soon!");
    });

    // Add Animation to Hero Section Text
    const heroText = document.querySelector(".hero-section h1");
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(-20px)";
    setTimeout(() => {
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
        heroText.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    }, 500);
});
