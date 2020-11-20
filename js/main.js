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

/**
 * Single animation:
 * shedule the 'blink' animation
 * with classSheduler.
 */
const blink = () => {
    classSheduler(head, 'blink', 100);
}

/**
 * List of animations to shedule
 * with classSheduler
 */
const animations = [ blink ];


/**
 * List of pause times (ms)
 */
const pauseTimes = [ 100, 100, 3000, 5000, 500 ];

/**
 * Shedule animation listed in {animations}
 * with pauses between, randomly picked
 * in {pauseTimes}.
 * Callback itself.
 */
const animationSheduler = () => {
    let pauseTime = pauseTimes.sample();

    setTimeout(
        animations.sample(),
        pauseTime );

    setTimeout(
        animationSheduler,
        pauseTime );
}

// animationSheduler();




/*
    =============================================
        GENERAL: STUFF TO DO WHEN DOM'S READY
    =============================================
*/
window.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM entièrement chargé et analysé");

    if (document.body.classList.contains('normal')) {
        animationSheduler();
    }
    
    document.addEventListener("click", function(event) {
        if (event.target.id == 'control-christmas') {
            document.body.classList.remove('working');
            document.body.classList.add('christmas');
            console.log('Christmas outfits');
        } else if (event.target.id == 'control-working') {
            document.body.classList.remove('christmas');
            document.body.classList.add('working');
            console.log('Working outfits');
        } else if (event.target.id == 'control-fromside') {
            // document.body.classList.remove('christmas', 'working');
            document.body.classList.add('from-side');
            console.log('From side!');
        } else if (event.target.id == 'control-orange') {
            document.body.classList.remove('christmas', 'working', 'from-side');
            console.log('Orange outfits');
        }
    });
    
});


