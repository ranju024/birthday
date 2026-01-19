// const btn = document.getElementById("giftBtn");
// const countdown = document.getElementById("countdown");
// const finalText = document.getElementById("finalText");
// const gifScreen = document.getElementById("gifScreen");

// btn.addEventListener("click", () => {
//     btn.style.display = "none";

//     confetti({
//         particleCount: 160,
//         spread: 160,
//         startVelocity: 45
//     });

//     let time = 5;
//     countdown.style.opacity = 1;
//     countdown.textContent = time;

//     const timer = setInterval(() => {
//         time--;
//         if (time === 0) {
//             clearInterval(timer);
//             countdown.style.opacity = 0;

//             setTimeout(() => {
//                 finalText.style.opacity = 1;
//             }, 400);

//             setTimeout(showGif, 1800);
//         } else {
//             countdown.textContent = time;
//         }
//     }, 1000);
// });

// function showGif() {
//     finalText.style.opacity = 0;
//     gifScreen.style.opacity = 1;
// }

const btn = document.getElementById("giftBtn");
const countdown = document.getElementById("countdown");
const finalText = document.getElementById("finalText");
const roastText = document.getElementById("roastText");
const gifScreen = document.getElementById("gifScreen");
const music = document.getElementById("bg-music");

btn.addEventListener("click", () => {
    btn.style.display = "none";

    // 🎉 Confetti blast
    confetti({
        particleCount: 180,
        spread: 170,
        startVelocity: 45
    });

    // 🔊 Start music HERE (most reliable)
    if (music) {
        music.volume = 0;
        music.play().then(() => {
            let v = 0;
            const fade = setInterval(() => {
                v += 0.01;
                music.volume = Math.min(v, 0.15);
                if (v >= 0.15) clearInterval(fade);
            }, 120);
        });
    }

    // ⏱ Countdown
    let time = 5;
    countdown.textContent = time;
    countdown.style.opacity = 1;

    const timer = setInterval(() => {
        time--;
        if (time === 0) {
            clearInterval(timer);
            countdown.style.opacity = 0;

            // Final text
            setTimeout(() => {
                finalText.style.opacity = 1;
            }, 300);

            // Roast text
            setTimeout(() => {
                finalText.style.opacity = 0;
                roastText.style.opacity = 1;
            }, 1800);

            // Hide roast → show GIF
            setTimeout(() => {
                roastText.style.opacity = 0;
                gifScreen.style.opacity = 1;
            }, 3600);
        } else {
            countdown.textContent = time;
        }
    }, 1000);
});
