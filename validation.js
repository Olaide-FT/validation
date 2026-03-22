document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    if (!email && !password ){
         emailError.innerHTML = "Enter your email";
         passwordError.innerHTML = "Enter your password";
    }

    else if (!email || !email.includes("@") || !email.includes(".")) {
        emailError.innerHTML = "Enter a valid email address";
    }

    else if (!password || password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters";
    }

    else {
        let popup = document.getElementById("successPopup");

        popup.classList.remove("opacity-0", "scale-95", "pointer-events-none");
        popup.classList.add("opacity-100", "scale-100");
    }
});

document.getElementById("closePopup").addEventListener("click", function () {
    let popup = document.getElementById("successPopup");

    popup.classList.remove("opacity-100", "scale-100");
    popup.classList.add("opacity-0", "scale-95", "pointer-events-none");
});