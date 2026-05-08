document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("hero-video");
    const button = document.getElementById("sound-toggle");

    if (!video || !button) return;

    video.muted = true;
    button.textContent = "Unmute";

    button.addEventListener("click", () => {
        video.muted = !video.muted;
        button.textContent = video.muted ? "Unmute" : "Mute";
        if (video.paused) {
            video.play().catch(() => {
            });
        }
    });
});