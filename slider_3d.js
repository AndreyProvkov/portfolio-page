class Slider3D {
    perspectiveValue = -1000;
    zValues = [];
    frames = document.querySelectorAll('.frame');
    timePause = 700;
    stepZValue = 10;

    setBeginZValues() {
        this.frames.forEach( (item, index) => {
            let zValue = index * this.perspectiveValue;
            this.zValues.push(zValue);
            item.style.transform = `translateZ(${zValue}px)`;
        });
    }

    setOpacitySlides(item, index) {
        if (this.zValues[index] > 0) {
            item.style.opacity = '0';
        } else {
            item.style.opacity = '1';
        }
    }

    isEndOfSlidesRange(e) {
        if ((this.zValues[0] <= 0 && e.deltaY < 0) ||
            (this.zValues[this.zValues.length - 1] >= 0 && e.deltaY > 0)) {
            return true;
        }
        return false;
    }

    changeZValue(item, index, e) {
        this.zValues[index] += e.deltaY * this.stepZValue;
        item.style.transform = `translateZ(${this.zValues[index]}px)`;
    }

    scroll(e) {
        if (this.isEndOfSlidesRange(e)) return;

        this.frames.forEach( (item, index) => {
            this.changeZValue(item, index, e);
            this.setOpacitySlides(item, index);
        }); 
    }

    pauseScrollDecorator(func, ms) {
        let isCooldown = false;
        return (e) => {
            if (isCooldown) return;
            
            func.call(this, e);
            isCooldown = true;
            setTimeout( () => isCooldown = false, ms);
        };
    }

    init() {
        this.setBeginZValues();

        this.scroll = this.pauseScrollDecorator(this.scroll, this.timePause);

        document.addEventListener('wheel', this.scroll);
    }
}

const slider3d = new Slider3D();
slider3d.init();