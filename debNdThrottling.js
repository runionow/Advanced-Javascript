let counter = 0;

// OnCLick Event
const getData = function() {
    console.log("Fetching Data :" + counter++);
}

const resizeLogger = function() {
    console.log("Window resizing function");
}
// Debouncing
const debounce = function(fn, delay) {
    let timer;
    return function() {
        let ctx = this, 
        args = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(ctx,args);
        }, delay);
    }
}

// Throttle function 
const throttle = function(fn,delay) {
    let flag = true;
    return function() {
        let ctx = this,
        args = arguments;
        if(flag) {
            fn.apply(ctx,args);
            flag = false;
            setTimeout(() => {
                flag = true;
            },delay);
        }
    }
}

const debounceFx = debounce(getData, 300);
const throttleFx = throttle(resizeLogger,300);
window.addEventListener("resize", throttleFx );

