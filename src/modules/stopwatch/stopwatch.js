export default class Stopwatch {
    startStopButton = document.querySelector('.stopwatch__start-stop');
    pauseContinueButton = document.querySelector('.stopwatch__pause-continue');
    timesBlock = document.querySelectorAll('.stopwatch__times span');
    startTime = 0;
    intervalId = 0;
    active = false;
    pause = false;
    stop = true;
    times = [
        { hr: this.startTime },
        { min: this.startTime }, 
        { sec: this.startTime }, 
        { ms: this.startTime }
    ];

    increaseTime(timeArr, index, timeKey) {
        timeArr[index][timeKey]++;
    }

    isActive() {
        if (this.active === true) return true;
        return false;
    }

    isPause() {
        if (this.pause === true) return true;
        return false;
    }

    isEndRangeTime(time, timeValue) {
        if (time === 'ms' && timeValue === 100) return true;
        if ((time === 'sec' || time === 'min') && timeValue === 60) return true;
        return false;
    }

    isSingleDigit(number) {
        if (number >= 0 && number < 10) return true;
        return false;
    }

    clearCurrentTime(arr, index, time) {
        arr[index][time] = this.startTime;
    }

    clearAllTime(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i][this.getKeyItem(arr, i)] = this.startTime;
        }
    }

    getKeyItem(arr, index) {
        return Object.keys(arr[index]).toString();
    }

    getValueItem(arr, index) {
        return parseInt(Object.values(arr[index]));
    }

    showTime(arr) {
        let str = ``;
        for (let i = 0; i < arr.length; i++) {
            if (!this.isSingleDigit(this.getValueItem(arr, i))) {
                str = `${this.getValueItem(arr, i)}`;
            } else {
                str = `0${this.getValueItem(arr, i)}`;
            }

            this.timesBlock[i].innerHTML = str;
        }
    }

    nextTime(timeArr) {        
        this.showTime(timeArr);

        this.increaseTime(timeArr, (timeArr.length - 1), this.getKeyItem(timeArr, (timeArr.length - 1)));

        for (let i = timeArr.length - 1; i > 0; i--) {
            if (this.isEndRangeTime(this.getKeyItem(timeArr, i), this.getValueItem(timeArr, i))) {
                this.clearCurrentTime(timeArr, i, this.getKeyItem(timeArr, i));
                this.increaseTime(timeArr, (i - 1), this.getKeyItem(timeArr, (i - 1)));
            }
        }
    }

    startStopwatch(e) {
        this.intervalId = setInterval(() => {
            this.nextTime(this.times);
        }, 10);
        this.activateButton(this.pauseContinueButton);

        this.changeTextButton(e.target, 'Stop');
        if (this.isPause()) {
            this.changeTextButton(e.target, 'Pause');
        }

        this.active = true;
        this.pause = false;
        this.stop = false;
    }

    changeTextButton(el, txt) {
        el.textContent = txt;
    }

    disableButton(el) {
        el.disabled = true;
    }

    activateButton(el) {
        el.disabled = false;
    }

    stopStopwatch(e) {
        clearInterval(this.intervalId);
        this.clearAllTime(this.times);
        this.changeTextButton(e.target, 'Start');
        this.changeTextButton(this.pauseContinueButton, 'Pause');
        this.disableButton(this.pauseContinueButton);
        this.active = false;
        this.stop = true;
        this.pause = false;
    }

    pauseStopwatch(e) {
        clearInterval(this.intervalId);
        this.changeTextButton(e.target, 'Continue');
        this.pause = true;            
    }

    init() {
        this.disableButton(this.pauseContinueButton);

        this.startStopButton.addEventListener('click', (e) => {
            if (this.isActive()) {
                this.stopStopwatch(e);  
            } else {
                this.startStopwatch(e);
            }
        });
        
        this.pauseContinueButton.addEventListener('click', (e) => {
            if (!this.isPause()) {
                this.pauseStopwatch(e);
            } else {
                this.startStopwatch(e);
            }
        });
    }
}