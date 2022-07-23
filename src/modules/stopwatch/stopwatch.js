export default class Stopwatch {
    startStopButton = document.querySelector('.stopwatch__start-stop');
    pauseContinueButton = document.querySelector('.stopwatch__pause-continue');
    newLapButton = document.querySelector('.stopwatch__btn-new-lap');
    timesBlock = document.querySelectorAll('.stopwatch__times span');
    buttonsBlock = document.querySelector('.stopwatch__buttons');
    lapsBlock = document.querySelector('.stopwatch__laps');
    currentTimes = document.querySelector('.current-time');
    newLapTime = document.querySelector('.new-time');

    startTime = 0;
    intervalId = 0;
    lapCount = 1;

    active = false;
    pause = false;
    stop = true;

    times = [
        { hr: this.startTime },
        { min: this.startTime },
        { sec: this.startTime },
        { ms: this.startTime }
    ];
    newTimes = [
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
        for (let i = 0; i < arr.length; i++) {
            arr[i][this.getKeyItem(arr, i)] = this.startTime;
        }
    }

    getKeyItem(arr, index) {
        return Object.keys(arr[index]).toString();
    }

    getValueItem(arr, index) {
        return parseInt(Object.values(arr[index]));
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

    showTime(arr, ...timeBlocks) {
        let str = ``;

        for (let i = 0; i < arr.length; i++) {
            if (!this.isSingleDigit(this.getValueItem(arr, i))) {
                str = `${this.getValueItem(arr, i)}`;
            } else {
                str = `0${this.getValueItem(arr, i)}`;
            }

            timeBlocks.forEach(el => {
                el[i].innerHTML = str;
            });
        }
    }

    nextTime(timeArr) {
        this.increaseTime(
            timeArr,
            (timeArr.length - 1),
            this.getKeyItem(timeArr, (timeArr.length - 1))
        );

        for (let i = timeArr.length - 1; i > 0; i--) {
            if (this.isEndRangeTime(this.getKeyItem(timeArr, i), this.getValueItem(timeArr, i))) {
                this.clearCurrentTime(timeArr, i, this.getKeyItem(timeArr, i));
                this.increaseTime(timeArr, (i - 1), this.getKeyItem(timeArr, (i - 1)));
            }
        }
    }

    startStopwatch(e) {
        let newLapTimeBlocks;
        let currentLapTimeBlocks;

        this.intervalId = setInterval(() => {
            this.nextTime(this.times);

            if (this.lapsBlock) {
                newLapTimeBlocks = this.newLapTime.children;
                currentLapTimeBlocks = this.currentTimes.children;

                this.nextTime(this.newTimes);

                this.showTime(
                    this.times,
                    this.timesBlock,
                    currentLapTimeBlocks
                );
                this.showTime(this.newTimes, newLapTimeBlocks);
            } else {
                this.showTime(this.times, this.timesBlock);
            }
        }, 10);

        this.activateButton(this.pauseContinueButton);
        this.activateButton(this.newLapButton);

        this.changeTextButton(e.target, 'Stop');

        if (this.isPause()) {
            this.changeTextButton(e.target, 'Pause');
        }

        this.active = true;
        this.pause = false;
        this.stop = false;
    }

    stopStopwatch(e) {
        clearInterval(this.intervalId);

        this.clearAllTime(this.times);
        this.clearAllTime(this.newTimes);

        this.showTime(this.times, this.timesBlock);

        this.changeTextButton(e.target, 'Start');
        this.changeTextButton(this.pauseContinueButton, 'Pause');

        this.disableButton(this.pauseContinueButton);
        this.disableButton(this.newLapButton);

        if (this.lapsBlock) {
            this.lapsBlock.remove();
            this.lapsBlock = null;
            this.lapCount = 1;
        }

        this.active = false;
        this.stop = true;
        this.pause = false;
    }

    pauseStopwatch(e) {
        clearInterval(this.intervalId);

        this.changeTextButton(e.target, 'Continue');
        this.disableButton(this.newLapButton);

        this.pause = true;
    }

    newLap() {
        let newLapTimeBlocks;
        let currentLapTimeBlocks;
        let lap;
        let [hour, min, sec, ms] = this.times.map((time, idx, arr) => this.getValueItem(arr, idx));
        let elem = `
            <div class='stopwatch__lap'>
                <span class='stopwatch__lap-number'>№${this.lapCount++}</span>
                <div class='stopwatch__lap new-time'>
                    <span class='new-time__time'>${hour}</span> :
                    <span class='new-time__time'>${min}</span> :
                    <span class='new-time__time'>${sec}</span>.
                    <span class='new-time__time stopwatch__milliseconds'>${ms}</span>
                </div>
                <div class='stopwatch__lap current-time'>
                    <span class='current-time__time'>${hour}</span> :
                    <span class='current-time__time'>${min}</span> :
                    <span class='current-time__time'>${sec}</span>.
                    <span class='current-time__time stopwatch__milliseconds'>${ms}</span>
                </div>
            </div>
        `;
        let beginElem = `<div class='stopwatch__laps'></div>`;

        this.clearAllTime(this.newTimes);

        if (this.lapsBlock) {
            this.lapsBlock.insertAdjacentHTML('afterbegin', elem);
        } else {
            this.buttonsBlock.insertAdjacentHTML('afterend', beginElem);

            this.lapsBlock = document.querySelector('.stopwatch__laps');
            this.lapsBlock.insertAdjacentHTML('afterbegin', elem);
            this.lapsBlock.addEventListener('wheel', e => {
                e.stopPropagation();
            });

            newLapTimeBlocks = document.querySelector('.new-time').children;
            currentLapTimeBlocks = document.querySelector('.current-time').children;
            this.showTime(
                this.times,
                newLapTimeBlocks,
                currentLapTimeBlocks
            );

            this.lapsBlock.insertAdjacentHTML('afterbegin', elem);

            lap = document.querySelector('.stopwatch__lap-number');
            lap.textContent = `№${this.lapCount++}`;
        }

        this.newLapTime = document.querySelector('.new-time');
        this.currentTimes = document.querySelector('.current-time');
    }

    init() {
        this.disableButton(this.pauseContinueButton);
        this.disableButton(this.newLapButton);

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

        this.newLapButton.addEventListener('click', this.newLap.bind(this));
    }
}