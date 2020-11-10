Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

/**
 * Add a class to DOM element.
 * Remove the class after <lifetime> ms.
 * @param {Node} element
 * @param {String} className
 * @param {Number} lifetime
 */
const classSheduler = (element, className, lifetime) => {
    element.classList.add(className);
    setTimeout(
        () => { element.classList.remove(className) },
        lifetime
    );
}

const head = document.getElementById('head');
// const eyeLeft = document.getElementById('eye_left');
// const eyeRight = document.getElementById('eye_right');
// const eyeClosedLeft = document.getElementById('eye_closed_left');
// const eyeClosedRight = document.getElementById('eye_closed_right');

const blink = () => {
    // classSheduler(eyeLeft, 'blink-off', 100);
    // classSheduler(eyeRight, 'blink-off', 100);
    // classSheduler(eyeClosedLeft, 'blink-on', 100);
    // classSheduler(eyeClosedRight, 'blink-on', 100);
    classSheduler(head, 'blink', 100);
}

const animations = [ blink ];

const pauseTimes = [ 100, 100, 3000, 5000, 500 ];

const animationSheduler = () => {
    let pauseTime = pauseTimes.sample();

    setTimeout(
        animations.sample(),
        pauseTime );

    setTimeout(
        animationSheduler,
        pauseTime );
}

animationSheduler();