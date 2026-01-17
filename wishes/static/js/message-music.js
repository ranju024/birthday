const music = document.getElementById("bg-music");
const MUSIC_KEY = "bg-music-time";

if (music) {
    music.volume = 0; // start silent

    // Restore previous time
    const savedTime = localStorage.getItem(MUSIC_KEY);
    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    // Try autoplay (fallback on user interaction)
    music.play().then(() => {
        // Smooth fade-in
        let vol = 0;
        const fade = setInterval(() => {
            vol += 0.01; // VERY gentle
            music.volume = Math.min(vol, 0.15); // 🔈 final subtle volume
            if (vol >= 0.15) clearInterval(fade);
        }, 150);
    }).catch(() => {
        document.addEventListener(
            "click",
            () => music.play(),
            { once: true }
        );
    });

    // Save playback position
    setInterval(() => {
        localStorage.setItem(MUSIC_KEY, music.currentTime);
    }, 500);
}
