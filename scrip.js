
/* Funcion kickdrums */
function kickDrums(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;

    if (e.type === 'keydown') {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    } else if (e.type === 'keyup') {
        key.classList.remove('playing');
    }
}

window.addEventListener('keydown', kickDrums);
window.addEventListener('keyup', kickDrums);