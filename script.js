const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', function (e) {
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
});

function removeTrasition(e) {
    console.log(e);
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// When key is pressed, the console log will display the keyCode
// console.log(e);

// A = keycode(65)
// S = keycode(83)
// D = keycode(68)
// F = keycode(70)
// G = keycode(71)
// H = keycode(72)
// J = keycode(74)
// K = keycode(75)
// L = keycode(76)