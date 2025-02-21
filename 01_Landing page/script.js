function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
    } else {
        alert("Message Sent Successfully!");
        this.reset();
    }
});
