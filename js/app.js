
/* Banner Slider */

let currentSlide = 0;
const slides = document.querySelectorAll(".slider-img");

function showSlide(index) {
    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

if (slides.length > 0) {
    setInterval(nextSlide, 3000);
}


/* Password Show / Hide */

let eyeBtn = document.querySelector('.eyeBtn');
let passwordInput = document.querySelector('#password');

function pskHideShow() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeBtn.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
        passwordInput.type = 'password';
        eyeBtn.innerHTML = '<i class="bi bi-eye"></i>';
    }
}

if (eyeBtn && passwordInput) {
    eyeBtn.addEventListener('click', pskHideShow);
}


/* Product Quantity Counter */

let incrementBtn = document.querySelector('#plusBtn');
let input = document.querySelector('#quantity');

if (incrementBtn && input) {
    incrementBtn.addEventListener('click', () => {
        input.value = Number(input.value) + 1;
    });
}

let decrementBtn = document.querySelector('#minusBtn');

if (decrementBtn && input) {
    decrementBtn.addEventListener('click', () => {
        if (Number(input.value) > 1) {
            input.value = Number(input.value) - 1;
        }
    });
}


/* Product Quantity Counter  End*/


let trailCount = 10;
let trailDots = [];

for (let i = 0; i < trailCount; i++) {
    let dot = document.createElement('div');

    dot.className = 'mouse-trail';
    document.body.appendChild(dot);

    trailDots.push({
        element: dot,
        x: 0,
        y: 0
    });
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateTrail() {
    let x = mouseX;
    let y = mouseY;

    trailDots.forEach((dot, index) => {
        dot.x += (x - dot.x) * 0.35;
        dot.y += (y - dot.y) * 0.35;

        dot.element.style.left = dot.x + 'px';
        dot.element.style.top = dot.y + 'px';

        x = dot.x;
        y = dot.y;
    });

    requestAnimationFrame(animateTrail);
}

animateTrail();



let cartCount = 0;

const cartCountElement = document.querySelector(".cart-count");
const addCartButtons = document.querySelectorAll(".add-cart-btn");

addCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        cartCount++;

        cartCountElement.textContent = cartCount;

    });
});




const sidebarToggle = document.querySelector("#sidebarToggle");
const sidebarClose = document.querySelector("#sidebarClose");
const sidebar = document.querySelector("#sidebar");
const sidebarOverlay = document.querySelector("#sidebarOverlay");

sidebarToggle.addEventListener("click", function () {
    sidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
});

sidebarClose.addEventListener("click", function () {
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
});

sidebarOverlay.addEventListener("click", function () {
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
});






const registerForm = document.querySelector(".register-box form");

function setupPasswordToggle(buttonId, inputId) {
    const button = document.getElementById(buttonId);
    const input = document.getElementById(inputId);

    button.addEventListener("click", function () {
        const isHidden = input.type === "password";

        input.type = isHidden ? "text" : "password";

        button.innerHTML = isHidden
            ? '<i class="bi bi-eye-slash"></i>'
            : '<i class="bi bi-eye"></i>';

        button.setAttribute(
            "aria-label",
            isHidden ? "Hide password" : "Show password"
        );
    });
}

setupPasswordToggle("togglePassword", "registerPassword");

setupPasswordToggle("toggleConfirmPassword", "confirmPassword");

registerForm.addEventListener("submit", function (event) {
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        event.preventDefault();
        alert("Passwords do not match!");
    }
});







const openSubscribeModal = document.getElementById("openSubscribeModal");
const subscribeModal = document.getElementById("subscribeModal");
const subscribeClose = document.querySelector(".subscribe-close");

if (openSubscribeModal && subscribeModal) {
    openSubscribeModal.addEventListener("click", function (event) {
        event.preventDefault();
        subscribeModal.classList.add("active");
    });
}

if (subscribeClose && subscribeModal) {
    subscribeClose.addEventListener("click", function () {
        subscribeModal.classList.remove("active");
    });
}

if (subscribeModal) {
    subscribeModal.addEventListener("click", function (event) {
        if (event.target === subscribeModal) {
            subscribeModal.classList.remove("active");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            subscribeModal.classList.remove("active");
        }
    });
}




