function playSound(e){
    const audio = document.querySelector(`audio[data-key='${e.key}']`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    const button = document.querySelector(`button[data-key='${e.key}']`);
    button.classList.add('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', 
    function(e){
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing')
    }))

window.addEventListener('keypress', playSound);
