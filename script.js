document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn__animate");
    buttons.forEach((button) => {
        const text = button.textContent.trim();
        button.style.setProperty("--button-text", `"${text}"`);
    });
});