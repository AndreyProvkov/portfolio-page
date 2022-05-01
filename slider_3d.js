const perspectiveValue = -1000;
const zValues = [];
const frames = document.querySelectorAll('.frame');
const timePause = 700;

frames.forEach( (item, index) => {
    let zValue = index * perspectiveValue;
    zValues.push(zValue);
    item.style.transform = `translateZ(${zValue}px)`;
})

scroll3d = pauseDecorator(scroll3d, timePause);

document.addEventListener('wheel', scroll3d);

function scroll3d(e) {
    if ((zValues[0] <= 0 && e.deltaY < 0) ||
         (zValues[zValues.length - 1] >= 0 && e.deltaY > 0)) {
        return;
    }

    frames.forEach( (item, index) => {
        zValues[index] += e.deltaY * 10;
        item.style.transform = `translateZ(${zValues[index]}px)`;
        if (zValues[index] > 0) {
            item.style.opacity = '0';
        } else {
            item.style.opacity = '1';
        }
        
    }); 
}

function pauseDecorator(func, ms) {
    let isCooldown = false;
    return (e) => {
        if (isCooldown) return;

        func(e);
        isCooldown = true;
        setTimeout( () => isCooldown = false, ms);
    };
}