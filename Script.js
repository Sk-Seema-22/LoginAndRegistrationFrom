// Toggle Forms
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

document.getElementById("showRegister").onclick = () => {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
};

document.getElementById("showLogin").onclick = () => {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
};

// Login Validation
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");

    if (email.value === "" || password.value === "") {
        alert("Please fill in all fields");
        return;
    }

    alert("Login Successful!");
});

// Registration Validation
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("regName");
    const email = document.getElementById("regEmail");
    const password = document.getElementById("regPassword");

    if (name.value.length < 3) {
        alert("Name must be at least 3 characters");
        return;
    }

    if (!email.value.includes("@")) {
        alert("Enter a valid email");
        return;
    }

    if (password.value.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Registration Successful!");
});
