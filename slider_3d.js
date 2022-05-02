class Slider3D {
    perspectiveValue = -1000;
    zValues = [];
    frames = document.querySelectorAll('.frame');
    timePause = 700;
    stepZValueWheel = 10;
    stepZValueKey = 1000;

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
        if ((this.zValues[0] <= 0 && 
            (e.deltaY < 0 || this.isKeyArrowDown(e))) ||
            (this.zValues[this.zValues.length - 1] >= 0 && 
            (e.deltaY > 0 || this.isKeyArrowUp(e)))) {
            return true;
        }
        return false;
    }

    changeZValue(item, index, e) {
        if (this.isWheelEvent(e)) this.zValues[index] += e.deltaY * this.stepZValueWheel;
        
        if (this.isKeydownEvent(e)) {
            if (this.isKeyArrowUp(e)) this.zValues[index] += this.stepZValueKey;
            if (this.isKeyArrowDown(e)) this.zValues[index] += -this.stepZValueKey;
        }

        item.style.transform = `translateZ(${this.zValues[index]}px)`;
    }

    isWheelEvent(e) {
        if (e.type === 'wheel') return true;
        return false;
    }

    isKeydownEvent(e) {
        if (e.type === 'keydown') return true;
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
        document.addEventListener('keydown', this.scroll)
    }
}

const slider3d = new Slider3D();
slider3d.init();