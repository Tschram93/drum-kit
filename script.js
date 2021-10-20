const keys = document.querySelectorAll('.key');

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // if no audio element it stops the function from running.
    if (!audio)
        return;

    audio.currentTime = 0; //Rewind to start of audio sound
    audio.play();

    // Adds the class of 'playing' when key is pressed
    key.classList.add('playing');



    // console.log(key);
}

function removeTransition(e) {
    if (e.propertyName !== 'transform')
        // it skips if it is not transformed
        return;
    // console.log(e.propertyName);
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// When key is pressed, the console log will display the keyCode
// console.log(e);
window.addEventListener('keydown', playSound);

// A = keycode(65)
// S = keycode(83)
// D = keycode(68)
// F = keycode(70)
// G = keycode(71)
// H = keycode(72)
// J = keycode(74)
// K = keycode(75)
// L = keycode(76)