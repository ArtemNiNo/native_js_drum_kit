function playSound(e) {
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const drum = document.querySelector(`li[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    drum.classList.add('playing');
}
function removeTransition (e) {
    this.classList.remove('playing');
}

const drums = document.querySelectorAll('.drum-item');
drums.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", playSound);