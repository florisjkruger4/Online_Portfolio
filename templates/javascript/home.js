// JavaScript
document.querySelectorAll('.expandBtn').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.nextElementSibling;

        button.classList.toggle('expandBtn');

        if(button.classList.toggle('expandBtn')){
            expanded.style.maxHeight = expanded.scrollHeight + 'px';
            button.style.color = '#2ec4b6';
        }

    });
});

document.querySelectorAll('.expandBtn').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.nextElementSibling;

        if(button.classList.toggle('expandBtn')){
            expanded.style.maxHeight = 0;
            button.style.color = '#fdfffc';
        }

    });
});

// Auto Type JS
var typed = new Typed(".auto-type", {
    strings: [,"Developer", "Programmer", "Computer Scientist", "Learner", "Designer", "Coder"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  })

// KUTE Blobs 
var tween = KUTE.fromTo(
    '#blob1', {path: '#blob1' }, { path: '#blob2' }, 
    {repeat:1000, duration: 3000, yoyo: true, easing: 'easingQuadraticInOut'}
    )
    .start();

var tween2 = KUTE.fromTo(
    '#blob3', {path: '#blob3' }, { path: '#blob4' },
    {repeat:1000, duration: 2000, yoyo: true, easing: 'easingQuadraticInOut'}
    )
    .start();

var tween3 = KUTE.fromTo(
    '#blob5', {path: '#blob5' },
    { path: '#blob6' },
    {repeat:1000, duration: 1000, yoyo: true, easing: 'easingQuadraticInOut'}
    )
    .start();

var tween4 = KUTE.fromTo(
    '#blob7', {path: '#blob7' },
    { path: '#blob8' },
    {repeat:1000, duration: 3000, yoyo: true, easing: 'easingQuadraticInOut'}
    )
    .start();

var tween5 = KUTE.fromTo(
    '#blob9', {path: '#blob9' },
    { path: '#blob10' },
    {repeat:1000, duration: 2000, yoyo: true, easing: 'easingQuadraticInOut'}
    )
    .start();

var tween6 = KUTE.fromTo(
    '#blob11', {path: '#blob11' },
    { path: '#blob12' },
    {repeat:1000, duration: 1000, yoyo: true, easing: 'easingQuadraticInOut'}
    )
    .start();