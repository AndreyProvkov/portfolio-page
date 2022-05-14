export default class BackgroundMusic {
    backgroundMusic = document.querySelector('.background-music');
    audio = document.querySelector('.background-music audio');
    audioItems = document.querySelectorAll('.background-music__item');

    isPaused() {
        if (this.audio.paused) return true;
        return false;
    }

    setOpacityAudio() {
        if (this.isPaused()) {
            this.backgroundMusic.style.opacity = '0.5';
        } else {
            this.backgroundMusic.style.opacity = '1';
        }
    }

    toggleAnimationPause() {
        if (this.isPaused()) {
            this.audioItems.forEach((item) => {
                item.style.animationPlayState = 'paused';
            })
        } else {
            this.audioItems.forEach((item) => {
                item.style.animationPlayState = 'running';
            })
        }
    }

    toggleAudioPause() {
        if (this.isPaused()) {
            this.audio.play();
        }
        else {
            this.audio.pause();
        }
    }

    init() {
        this.audio.pause();
        this.setOpacityAudio();
        this.toggleAnimationPause();
        
        this.backgroundMusic.addEventListener('click', () => {
            this.toggleAudioPause.bind(this)();
            this.toggleAnimationPause.bind(this)();
            this.setOpacityAudio.bind(this)();
        });
    }
}