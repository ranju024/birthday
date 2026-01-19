const frames = document.querySelectorAll(".photo-frame");
let current = 0;
let soundUnlocked = false;

function playSound(name) {
    if (!soundUnlocked) return;

    const audio = document.getElementById(name);
    if (!audio) return;

    audio.currentTime = 0;
    audio.volume = 0.7;
    audio.play().catch(() => { });
}

function showFrame(index) {
    frames.forEach(f => f.classList.remove("active"));
    const frame = frames[index];
    frame.classList.add("active");

    playSound(frame.dataset.sound);
}

// Unlock audio on first interaction
document.addEventListener("click", () => {
    soundUnlocked = true;
}, { once: true });

showFrame(current);

setInterval(() => {
    current = (current + 1) % frames.length;
    showFrame(current);
}, 4000);
