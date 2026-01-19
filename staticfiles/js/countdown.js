document.addEventListener("DOMContentLoaded", () => {

    /* ===== SOOTHING MUSIC (no controls) ===== */
    const music = document.getElementById("bg-music");

    function startMusic() {
        if (!music) return;

        music.volume = 0.25; // very soft
        music.play().catch(() => { });
        document.removeEventListener("click", startMusic);
    }

    // Browser-safe autoplay
    document.addEventListener("click", startMusic);

    /* ===== COUNTDOWN ===== */
    const countdown = document.getElementById("countdown");
    // const targetDate = new Date("2026-01-22T00:00:00");
    const targetDate = new Date(Date.now() + 5000);

    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            countdown.innerText = "🎉 It’s Time 🎉";
            setTimeout(() => {
                window.location.href = "/home/";
            }, 4000);
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        countdown.innerText = `${d}d ${h}h ${m}m ${s}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
