document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    // Log button clicks for tracking
    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            console.log(`Button clicked: ${event.target.textContent}`);
        });
    });
});
