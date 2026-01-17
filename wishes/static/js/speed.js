// function speedMode() {
//     document.body.style.background = "darkcyan";
//     // document.body.style.animation = "shake 0.5s infinite";
//     // document.style.body.animation = "4s linear 0s infinite alternate sun-rise";
// }

const speedImages = [
    "/static/images/speed_excited.gif",
    "/static/images/speed_numb.gif",
    "/static/images/speed_weird.gif"
];

// Preload images (VERY important)
speedImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Helper to get random image
function getRandomSpeedImage() {
    return speedImages[Math.floor(Math.random() * speedImages.length)];
}

// Show image immediately on page load
document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("speed-img");
    if (img) {
        img.src = getRandomSpeedImage();
    }
});

// Change image when button is pressed
document.getElementById("speed-btn").addEventListener("click", () => {
    const img = document.getElementById("speed-img");
    img.src = getRandomSpeedImage();
    img.classList.add("shake", "glitch");

    setTimeout(() => {
        img.classList.remove("shake", "glitch");
    }, 400);

    const sound = document.getElementById("speed-sound");
    if (sound) {
        sound.currentTime = 0;
        sound.volume = 0.8;
        sound.play().catch(() => { });
    }

    //Background flash synced with image 
    const colors = ["#ff004f", "#00eaff", "#ffe600", "#ffffff"];
    document.body.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    setTimeout(() => {
        document.body.style.background = "#0f172a"; // back to normal
    }, 200);

});

// Optional rage button
function speedRage() {
    document.body.style.background = "black";
    alert("AAAAAAAAA ⚡⚡⚡");
}


function spawnHeart() {
    const heart = document.createElement("div");
    heart.innerText = "💙";
    heart.className = "floating-heart";
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 80 + "vw";

    setTimeout(() => heart.remove(), 3000);
}

setInterval(spawnHeart, 600);
