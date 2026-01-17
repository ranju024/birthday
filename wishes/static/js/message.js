/* ===== TYPEWRITER ===== */
function typeWriter(el, speed = 35) {
    const html = el.innerHTML;
    el.innerHTML = "";

    let i = 0;
    let isTag = false;
    let output = "";

    const timer = setInterval(() => {
        const char = html[i];
        output += char;

        if (char === "<") isTag = true;
        if (char === ">") isTag = false;

        el.innerHTML = output;
        // ✅ AUTO SCROLL AS TEXT APPEARS
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });

        i++;
        if (i >= html.length) clearInterval(timer);
    }, speed);
}

window.onload = () => {
    const text = document.getElementById("text");
    typeWriter(text, 35);
};

/* ===== HEARTS BACKGROUND ===== */
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let hearts = [];

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

function createHeart() {
    return {
        x: rand(0, canvas.width),
        y: rand(canvas.height, canvas.height + 100),
        size: rand(8, 16),
        speed: rand(0.4, 1.4),
        drift: rand(-0.5, 0.5),
        alpha: rand(0.5, 1)
    };
}

function drawHeart(h) {
    ctx.save();
    ctx.globalAlpha = h.alpha;
    ctx.fillStyle = `rgba(255, ${rand(120, 180)}, ${rand(160, 210)}, ${h.alpha})`;
    ctx.beginPath();
    ctx.moveTo(h.x, h.y);
    ctx.bezierCurveTo(h.x - h.size, h.y - h.size,
        h.x - h.size * 2, h.y + h.size,
        h.x, h.y + h.size * 2);
    ctx.bezierCurveTo(h.x + h.size * 2, h.y + h.size,
        h.x + h.size, h.y - h.size,
        h.x, h.y);
    ctx.fill();
    ctx.restore();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (hearts.length < 220) hearts.push(createHeart());

    hearts.forEach(h => {
        h.y -= h.speed;
        h.x += h.drift;
        h.alpha -= 0.002;
        drawHeart(h);
    });

    hearts = hearts.filter(h => h.alpha > 0);
    requestAnimationFrame(animate);
}
animate();

/* ===== BUTTON ===== */
document.getElementById("nextBtn").addEventListener("click", () => {
    window.location.href = "/final-message/";
    // or another page you want
});
