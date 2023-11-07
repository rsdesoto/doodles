  
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const animation = document.querySelector(".circle")

playButton.addEventListener('click', () => {
    console.log("play");
    animation.style.animationPlayState = 'running';
})

pauseButton.addEventListener('click', () => {
    console.log("pause");
    animation.style.animationPlayState = 'paused';
})
