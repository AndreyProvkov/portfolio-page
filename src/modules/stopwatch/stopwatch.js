export default class Stopwatch {
    startStopButton = document.querySelector('.stopwatch__start-stop');
    pauseContinueButton = document.querySelector('.stopwatch__pause-continue');
    startTime = 0;
    intervalId = 0;
    active = false;
    pause = false;
    times = [
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

    isEndRangeTime(time, timeValue) {
        if (time === 'ms' && timeValue === 100) return true;
        if ((time === 'sec' || time === 'min') && timeValue === 60) return true;
        return false;
    }

    isSingleDigit(number) {
        if (number >= 0 && number < 10) return true;
        return false;
    }

    clearTime(arr, index, time) {
        arr[index][time] = this.startTime;
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
                str += `${this.getValueItem(arr, i)}`;
            } else {
                str += `0${this.getValueItem(arr, i)}`;
            }
            
            if (i !== arr.length - 1) {
                str += ` : `;
            }
        }
        console.log(str);
    }

    nextTime(timeArr) {        
        this.showTime(timeArr);

        this.increaseTime(timeArr, (timeArr.length - 1), this.getKeyItem(timeArr, (timeArr.length - 1)));

        for (let i = timeArr.length - 1; i > 0; i--) {
            if (this.isEndRangeTime(this.getKeyItem(timeArr, i), this.getValueItem(timeArr, i))) {
                this.clearTime(timeArr, i, this.getKeyItem(timeArr, i));
                this.increaseTime(timeArr, i - 1, this.getKeyItem(timeArr, i - 1));
            }
        }
    }

    start() {
        this.startStopButton.addEventListener('click', () => {
            if (!this.isActive()) {
                this.intervalId = setInterval(() => {
                    this.nextTime(this.times);
                }, 10);
            }
        })
    }

    stop() {
        this.pauseContinueButton.addEventListener('click', () => {
            clearInterval(this.intervalId);
            this.sec = this.startTime;
            this.ms = this.startTime;
        });
    }

    init() {
        this.start();
        this.stop();
    }
}