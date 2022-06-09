export default class Timer {
    startStopButton = document.querySelector('.timer__start-stop');
    pauseContinueButton = document.querySelector('.timer__pause-continue');
    timesBlock = document.querySelector('.timer__times').children;
    intervalId = 0;
    indexNotZeroValue = -1;
    active = false;
    pause = false;
    stop = true;
    times = [
        { hr: 0 },
        { min: 0 }, 
        { sec: 15 }, 
        { ms: 0 }
    ];
    selectedTimes = [];

    decreaseTime(timeArr, index, timeKey) {
        timeArr[index][timeKey]--;
    }

    isActive() {
        if (this.active === true) return true;
        return false;
    }

    isPause() {
        if (this.pause === true) return true;
        return false;
    }

    isEndRangeTime(timeValue) {
        if (timeValue < 0) return true;
        return false;
    }

    isSingleDigit(number) {
        if (number >= 0 && number < 10) return true;
        return false;
    }

    setNextTime(arr, index, time) {
        if (time === 'ms') {
            arr[index][time] = 99;
        } else {
            arr[index][time] = 59;
        }
    }

    isZeroAllTime(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (this.getValueItem(arr, i) !== 0) return false;
        }
        return true;
    }

    setZeroAllTime(arr) {
        arr.forEach((item, index) => {
            item[this.getKeyItem(arr, index)] = 0;
        });
    }

    setArrayItem(arrGiving, arrReceiving) {
        for (let i = 0; i < arrGiving.length; i++) {
            arrReceiving[i] = Object.assign({}, arrGiving[i]);
        }
    }

    getSelectedTime() {
        return this.selectedTimes;
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

            if (i !== arr.length - 1) {
                this.timesBlock[i].value = str;
            } else {
                this.timesBlock[i].innerHTML = str;
            }
        }
    }

    nextTime(timeArr) {        
        this.showTime(timeArr);
        
        this.decreaseTime(timeArr, (timeArr.length - 1), this.getKeyItem(timeArr, (timeArr.length - 1)));
        
        for (let i = timeArr.length - 1; i > 0; i--) {
            if (this.isEndRangeTime(this.getValueItem(timeArr, i))) {
                this.setNextTime(timeArr, i, this.getKeyItem(timeArr, i));
                this.decreaseTime(timeArr, (i - 1), this.getKeyItem(timeArr, (i - 1)));
            }
        }
    }

    startTimer(e) {
        this.intervalId = setInterval(() => {
            if (this.isZeroAllTime(this.times)) {
                this.stopTimer(e);
            } else {
                this.nextTime(this.times);
            }
        }, 10);

        if (!this.isZeroAllTime(this.times)) {
            this.activateButton(this.pauseContinueButton);
        }

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

    stopTimer(e) {
        clearInterval(this.intervalId);

        this.showTime(this.times);

        this.changeTextButton(e.target, 'Start');
        this.changeTextButton(this.pauseContinueButton, 'Pause');
        this.disableButton(this.pauseContinueButton);

        this.active = false;
        this.stop = true;
        this.pause = false;
    }

    pauseTimer(e) {
        clearInterval(this.intervalId);
        this.changeTextButton(e.target, 'Continue');
        this.pause = true;            
    }

    setStartState() {
        for (let i = 0; i < this.timesBlock.length; i++) {
            if (i < this.timesBlock.length - 2) {
                this.timesBlock[i].value = '00';
            }
            if (i === this.timesBlock.length - 2) {
                this.timesBlock[i].value = '15';
            }
        }

        this.disableButton(this.pauseContinueButton);
        this.setArrayItem(this.times, this.selectedTimes);
        this.showTime(this.times);
    }

    init() {
        this.setStartState();

        this.startStopButton.addEventListener('click', (e) => {
            if (this.isActive()) {
                this.setArrayItem(this.getSelectedTime(), this.times);
                this.stopTimer(e);  
            } else {
                this.startTimer(e);
            }
        });

        this.pauseContinueButton.addEventListener('click', (e) => {
            if (!this.isPause()) {
                this.pauseTimer(e);
            } else {
                this.startTimer(e);
            }
        });
    }
}