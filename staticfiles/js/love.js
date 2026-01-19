const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);


function createHeart() {
    return {
        // x: canvas.width / 2 + random(-200, 200),
        // y: canvas.height / 2 + random(-200, 200),
        // size: random(8, 15),
        // speed: random(0.5, 1.5),
        // alpha: 1

        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 120,
        size: random(8, 16),
        speed: random(0.4, 1.6),
        drift: random(-0.5, 0.5),
        alpha: random(0.6, 1),
        fade: random(0.0015, 0.003) // NEW
    };
}

function drawHeart(h) {
    ctx.save();
    ctx.globalAlpha = h.alpha;
    // ctx.fillStyle = "pink";
    ctx.fillStyle = `rgba(255, ${random(120, 180)}, ${random(160, 200)}, ${h.alpha})`;

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

    const MAX_HEARTS = Math.floor(window.innerWidth / 6);

    if (hearts.length < MAX_HEARTS) {
        hearts.push(createHeart());
    }

    hearts.forEach(h => {
        // h.y -= h.speed;
        // h.alpha -= 0.003;
        // drawHeart(h);
        h.y -= h.speed;
        h.x += h.drift;
        h.alpha -= h.fade;
        drawHeart(h);
    });

    hearts = hearts.filter(h => h.alpha > 0);
    requestAnimationFrame(animate);
}

animate();
