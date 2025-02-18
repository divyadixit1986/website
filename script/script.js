document.addEventListener("DOMContentLoaded", function () {
    // 🌍 Smooth Scrolling for Navbar Links
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

    // 🔑 Login Button Click Event (Demo)
    document.querySelector(".login-btn").addEventListener("click", function () {
        alert("Login Feature Coming Soon!");
    });

    // 🎬 Hero Section Animation
    const heroText = document.querySelector(".hero-section h1");
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(-20px)";
    setTimeout(() => {
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
        heroText.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    }, 500);

    // 📦 Fetch AI Tools from product.json
    fetch('product.json')
        .then(response => response.json())
        .then(data => {
            console.log("AI Tools Loaded:", data.products);
            displayProducts(data.products);
        })
        .catch(error => console.error("Error loading product data:", error));

    // 🎨 Function to Dynamically Display AI Tools
    function displayProducts(products) {
        const toolsContainer = document.querySelector('.tools-container');
        toolsContainer.innerHTML = ""; // Clear existing content

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('tool-card');
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            `;
            toolsContainer.appendChild(productCard);
        });
    }
});
