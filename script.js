window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // if no audio element it stops the function from running.
    if (!audio)
        return;

    // When key is pressed, the console log will display the keyCode
    // console.log(e);
});

// A = keycode(65)
// S = keycode(83)
// D = keycode(68)
// F = keycode(70)
// G = keycode(71)
// H = keycode(72)
// J = keycode(74)
// K = keycode(75)
// L = keycode(76)