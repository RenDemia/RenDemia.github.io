var audio = document.getElementById("miAudio");

function reproducir() {
    audio.play();
}

function pausar() {
    audio.pause();
}

function detener() {
    audio.pause();
    audio.currentTime = 0; // Reinicia la canción
}