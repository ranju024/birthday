// Typewriter effect (HTML-safe)
function typeWriter(element, speed = 40) {
    const html = element.innerHTML;
    element.innerHTML = "";

    let i = 0;
    let isTag = false;
    let output = "";

    const timer = setInterval(() => {
        const char = html[i];
        output += char;

        if (char === "<") isTag = true;
        if (char === ">") isTag = false;

        element.innerHTML = output;

        i++;
        if (i >= html.length) clearInterval(timer);
    }, speed);
}

// Timer since date
function timeElapse(startDate) {
    const now = new Date();
    const seconds = Math.floor((now - startDate) / 1000);

    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    document.getElementById("clock").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes`;
}

window.onload = () => {
    const code = document.getElementById("code");
    typeWriter(code);

    const start = new Date("2004-01-22");
    timeElapse(start);
    setInterval(() => timeElapse(start), 60000);
};
