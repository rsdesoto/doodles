  
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const animation = document.querySelector(".circle")

playButton.addEventListener('click', () => {
    animation.style.animationPlayState = 'running';
})

pauseButton.addEventListener('click', () => {
    animation.style.animationPlayState = 'paused';
})
