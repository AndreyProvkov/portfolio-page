export default class ScrollBarTop {
    frameSlides = document.querySelectorAll('.frame');
    unprogressScroll = document.querySelector('.scrollBarTop-unprogress');
    allWidthPercent = 100;
    widthPercent = 0;
    scrollCounter = 1;
    leftRange = 1;
    rightRange = this.frameSlides.length;
    countOfScrolls = this.frameSlides.length - 1;onePartOfWidthPercent = this.allWidthPercent / this.countOfScrolls;

    setPercentProgress(e) {
        if (e.deltaY > 0 || this.isKeyArrowUp(e)) {
            this.widthPercent += this.onePartOfWidthPercent;
        } else {
            this.widthPercent += -this.onePartOfWidthPercent;
        }
        this.unprogressScroll.style.left = `${this.widthPercent}%`;
    }

    setScrollCounter(e) {
        if (e.deltaY > 0 || this.isKeyArrowUp(e)) {
            this.scrollCounter++;
        } else {
            this.scrollCounter--;
        }
    }

    isEndOfRangeSlides(e) {
        if ((this.scrollCounter <= this.leftRange && 
            (e.deltaY < 0 || this.isKeyArrowDown(e))) || (this.scrollCounter >= this.rightRange && (e.deltaY > 0 || this.isKeyArrowUp(e)))) {
            return true;
        }
        return false;
    }

    isKeyArrowUp(e) {
        if (e.code === 'ArrowUp') return true;
        return false;
    }

    isKeyArrowDown(e) {
        if (e.code === 'ArrowDown') return true;
        return false;
    }

    scrollSlide(e) {
        if (this.isEndOfRangeSlides(e)) return;

        this.setPercentProgress(e);
        this.setScrollCounter(e);   
    }

    init() {
        document.addEventListener('wheel', this.scrollSlide.bind(this));
        document.addEventListener('keydown', this.scrollSlide.bind(this));
    }
}