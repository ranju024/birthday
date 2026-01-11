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
