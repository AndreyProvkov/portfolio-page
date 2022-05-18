export default class WelcomeScreen {
    screen = document.querySelector('.welcome-screen');
    transitionTimeSec = 0.5;
    transitionTimeMs = this.transitionTimeSec * 1000;

    setTransition() {
        this.screen.style.transition = `${this.transitionTimeSec}s all`;
    }

    setOpacity() {
        this.screen.style.opacity = '0';
    }

    clickToContinue() {
        this.screen.addEventListener('click', () => {
            this.setTransition();
            this.setOpacity();
            setTimeout(() => {
                this.screen.style.display = 'none';
            }, this.transitionTimeMs);
        });
    }

    stopKeyDown() {
        this.screen.addEventListener('keydown', (e) => {
            e.stopPropagation();
        });
    }

    stopWheelEvent() {
        this.screen.addEventListener('wheel', (e) => {
            e.stopPropagation();
        });
    }

    init() {
        this.stopWheelEvent();
        this.clickToContinue();
    }
}