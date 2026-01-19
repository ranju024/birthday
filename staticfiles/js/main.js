let sound = null;

for (let i = 0; i < 80; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 3 + "s";
    document.body.appendChild(confetti);
}

// const birthday = new Date("2004-01-22T00:00:00");
// setInterval(() => {
//     const now = new Date();
//     const diff = birthday - now;
//     const days = Math.floor(diff / (365 * 60 * 60 * 24));
//     document.getElementById("countdown").innerText = days + "days until your next GOAT year 🐐";
// }, 1000);


/* =========================
   HOME PAGE ONLY LOGIC
========================= */

// document.addEventListener("DOMContentLoaded", () => {
//     const floatBtns = document.querySelectorAll(".float-btn");
//     if (!floatBtns.length) return; // safety for other pages

//     // Random positions
//     floatBtns.forEach((btn) => {
//         btn.style.left = Math.random() * 70 + 10 + "vw";
//         btn.style.top = Math.random() * 60 + 20 + "vh";
//         btn.style.animationDelay = Math.random() * 5 + "s";
//     });

//     // Beat sync
//     let beat = false;
//     setInterval(() => {
//         beat = !beat;
//         floatBtns.forEach(btn => {
//             btn.style.transform = beat ? "scale(1.08)" : "scale(1)";
//         });
//     }, 600);
// });

/* Music autoplay helper (browser-safe) */
document.addEventListener("click", () => {
    const music = document.getElementById("bg-music");
    const btn = document.getElementById("music-btn");

    if (music && music.paused) {
        music.play().then(() => {
            if (btn) btn.innerText = "⏸ Pause Music";
            localStorage.setItem("musicPlaying", "true");
        }).catch(() => { });
    }
}, { once: true });


document.addEventListener("DOMContentLoaded", function () {

    //Music Logic
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");

    if (music && musicBtn) {
        // If user already allowed music earlier
        if (localStorage.getItem("musicPlaying") === "true") {
            music.play().then(() => {
                musicBtn.innerText = "⏸ Pause Music";
            }).catch(() => { });
        }

        musicBtn.addEventListener("click", () => {
            if (music.paused) {
                music.play();
                musicBtn.innerText = "⏸ Pause Music";
                localStorage.setItem("musicPlaying", "true");
            } else {
                music.pause();
                musicBtn.innerText = "🔊 Play Music";
                localStorage.setItem("musicPlaying", "false");
            }
        });
    }

    //Volume Logic
    const volumeSlider = document.getElementById("volume-slider");

    if (music && volumeSlider) {
        music.volume = volumeSlider.value;
        volumeSlider.addEventListener("input", () => {
            music.volume = volumeSlider.value;
        });
    }

    // Countdown Logic
    const countdownElement = document.getElementById("countdown");
    if (!countdownElement) return;

    // IMPORTANT: use YYYY-MM-DD format
    // const birthday = new Date("2026-01-22T00:00:00");
    const birthday = new Date(Date.now() + 5000);


    function updateCountdown() {
        const now = new Date();
        const diff = birthday - now;

        if (diff <= 0) {
            countdownElement.innerText = "🎉 IT'S YOUR BIRTHDAY!!! 🎉";
            // Redirect after 5 seconds
            setTimeout(() => {
                window.location.href = "/home/";
            }, 5000);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownElement.innerText =
            `${days}d ${hours}h ${minutes}m ${seconds}s until GOAT DAY 🐐`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});

function fireConfetti() {
    confetti({
        particleCount: 400,
        spread: 120,
        origin: { y: 0.6 }
    });
}

const canvas = document.getElementById("fireworks");
if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function drawFirework() {
        const x = random(0, canvas.width);
        const y = random(0, canvas.height);

        for (let i = 0; i < 100; i++) {
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${random(0, 360)}, 100%, 60%)`;
            ctx.fill();
        }
    }
    setInterval(drawFirework, 100);
}

const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);


document.addEventListener("DOMContentLoaded", function () {

    //Gift Logic
    const giftBtn = document.getElementById("gift-btn");
    const giftMessage = document.getElementById("gift-message");

    if (giftBtn && giftMessage) {
        giftBtn.addEventListener("click", function () {
            giftMessage.classList.remove("hidden");
            giftBtn.style.display = "none";

            sound = document.getElementById("typing-sound");

            // Start Playing Typing sound
            if (sound) {
                sound.currentTime = 0;
                sound.volume = 0.5;
                sound.play().catch(() => { });
            }

            fireConfetti(); //reuse your confetti
            startTyping();
        });
    }


    //Typing animation
    const text =
        "Happy Birthday, my guy 💙\n\n" +
        "You’re not just a friend.\n" +
        "You’re family.\n\n" +
        "Messi debates, Speed moments,\n" +
        "random laughs, dumb fights,\n" +
        "and still — we’re here.\n\n" +
        "I’m proud of you.\n" +
        "Never forget that.";

    let index = 0;

    function startTyping() {
        const el = document.getElementById("typing-text");

        if (!el) return;
        el.innerHTML = "";
        index = 0;

        const typing = setInterval(() => {
            el.innerHTML += text[index] === "\n" ? "<br>" : text[index];
            index++;


            // Auto-scroll Logic
            // el.scrollIntoView({ behavior: "smooth", block: "end" });
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
            });

            if (index >= text.length) {
                clearInterval(typing);
            }

            setTimeout(finishMessage, 300); // triggers glow + button

        }, 40);   //Adjust speed by changing 50 (lower = faster).
    }

    function finishMessage() {
        const box = document.getElementById("gift-message");
        const backBtn = document.getElementById("back-btn");
        const done = document.getElementById("done-sound");

        // Glow
        if (box) {
            box.classList.add("glow");
        }


        // Play ding once
        if (done) {
            done.currentTime = 0;
            done.volume = 0.6;
            done.play().catch(() => { });
        }

        // show back button
        setTimeout(() => {
            if (backBtn) backBtn.classList.add("show");
        }, 600);
    }
});

document.addEventListener("visibilitychange", () => {
    if (document.hidden && sound) {
        sound.pause();
        sound.currentTime = 0;
    }
});


// ===== HOME FLOATING BUTTON PHYSICS =====
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".float-btn");
    if (!buttons.length) return;

    const bounds = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    buttons.forEach((btn) => {
        let x = Math.random() * (bounds.width - 160);
        let y = Math.random() * (bounds.height - 120);
        let vx = (Math.random() * 0.6 + 0.3) * (Math.random() > 0.5 ? 1 : -1);
        let vy = (Math.random() * 0.6 + 0.3) * (Math.random() > 0.5 ? 1 : -1);

        btn.style.left = x + "px";
        btn.style.top = y + "px";

        function move() {
            x += vx;
            y += vy;

            // bounce from walls
            if (x <= 0 || x >= bounds.width - btn.offsetWidth) vx *= -1;
            if (y <= 0 || y >= bounds.height - btn.offsetHeight) vy *= -1;

            btn.style.left = x + "px";
            btn.style.top = y + "px";

            requestAnimationFrame(move);
        }
        // ✅ START FLOATING IMMEDIATELY
        move();

        btn.addEventListener("click", (e) => {
            e.preventDefault(); // stop instant navigation

            fireConfetti(); // 💥 confetti burst

            const link = btn.href;
            setTimeout(() => {
                window.location.href = link;
            }, 600); // let confetti be seen
            move();
        });
    });
});
