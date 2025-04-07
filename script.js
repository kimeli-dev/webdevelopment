// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        event.preventDefault(); // Prevent form submission
    } else {
        alert('Thank you for reaching out!');
    }
});
const themeToggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("icon");

// Check if dark mode is stored in local storage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
}

// Slide in the button once the page loads
window.addEventListener("load", () => {
    themeToggleBtn.classList.add("show");
});

// Toggle dark and light modes
themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark");  // Save dark mode in localStorage
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.removeItem("theme");  // Remove dark mode from localStorage
    }
// Check if dark mode is saved in local storage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
}

//
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .dark-mode {
            background-color: #333;
            color: #fff;
        }
    </style>
`);