

/* ===== CONFETTI + POPPER ===== */
const popper = document.getElementById("party-popper");

function burst() {
    popper.style.opacity = "1";

    confetti({
        particleCount: 140,
        spread: 160,
        startVelocity: 50,
        origin: { y: 0.65 }
    });

    setTimeout(() => {
        popper.style.opacity = "0";
    }, 1200);
}

/* First burst */
window.addEventListener("load", () => {
    setTimeout(burst, 900);
});

/* ===== THOUGHT POP-IN ===== */
const thought = document.getElementById("thought");
setTimeout(() => {
    thought.classList.add("show");
}, 3500);

/* ===== FLOATING DOTS ===== */
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const dots = [];

function createDot() {
    return {
        x: Math.random() * canvas.width,
        y: canvas.height + 50,
        r: Math.random() * 5 + 3,
        v: Math.random() * 0.4 + 0.2,
        a: 1
    };
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (dots.length < 90) dots.push(createDot());

    dots.forEach(d => {
        d.y -= d.v;
        d.a -= 0.001;
        ctx.globalAlpha = d.a;
        ctx.fillStyle = "#ffd6ec";
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
    });

    for (let i = dots.length - 1; i >= 0; i--) {
        if (dots[i].a <= 0) dots.splice(i, 1);
    }

    requestAnimationFrame(animate);
}
animate();

/* ===== THOUGHT MESSAGES ===== */
const thoughts = [
    "Someone’s birthday deserved more than just a cake 😉",
    "Dherai makkha parni haina😒",
    "Ghoster.",
    "Huh",
    "Kattina😏",
    "Anyway😊",
    "Some things were made just for today 🎂🥳",
    "Happy Birthday candy-crush"
];

const bubble = document.getElementById("thought-bubble");
let index = 0;

function showThought() {
    if (index >= thoughts.length) return;

    bubble.textContent = thoughts[index];
    bubble.classList.add("show");

    setTimeout(() => {
        bubble.classList.remove("show");
        index++;
        setTimeout(showThought, 1200);
    }, 4200);
}

window.addEventListener("load", () => {
    setTimeout(showThought, 1800);
});
