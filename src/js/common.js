export function pauseDecorator(func, ms) {
    let isCooldown = false;
    return function(e) {
        if (isCooldown) return;

        func.call(this, e);
        isCooldown = true;
        setTimeout( () => isCooldown = false, ms);
    };
}