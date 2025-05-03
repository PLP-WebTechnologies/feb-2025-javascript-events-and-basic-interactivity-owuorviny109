document.addEventListener("DOMContentLoaded", () => {
    // Button click events
    document.getElementById("changeTextButton").addEventListener("click", () => {
        document.getElementById("journeyText").textContent = "Text has been changed!";
    });

    document.getElementById("toggleStyleButton").addEventListener("click", () => {
        document.getElementById("content").classList.toggle("highlight");
    });

    document.getElementById("addElementButton").addEventListener("click", () => {
        const newElement = document.createElement("p");
        newElement.textContent = "New dynamic element added!";
        document.getElementById("dynamicContent").appendChild(newElement);
    });

    document.getElementById("secretActionButton").addEventListener("dblclick", () => {
        alert("Secret action triggered!");
    });

    // Hover effects
    const image = document.querySelector(".centered-image");
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.1)";
    });
    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
    });

    // Keypress detection
    document.addEventListener("keypress", (event) => {
        console.log(`Key pressed: ${event.key}`);
    });

    // Accordion functionality
    document.querySelectorAll(".accordion-header").forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });

    // Form validation
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;

        if (!name || !email || password.length < 8) {
            feedback.textContent = "Please fill out all fields correctly.";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Form submitted successfully!";
            feedback.style.color = "green";
        }
    });

    // Real-time form feedback
    form.addEventListener("input", () => {
        const password = form.password.value;
        if (password.length < 8) {
            feedback.textContent = "Password must be at least 8 characters.";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Password looks good!";
            feedback.style.color = "green";
        }
    });
});