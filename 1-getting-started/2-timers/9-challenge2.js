let count = 0;

const func = (delay) => {
    console.log(`Hello World. ${delay * 100}`);
    count += 1;

    if (count >= 5) {
        clearInterval(intervalId);
        delay += 1;
        count = 0;
        intervalId = setInterval(func, 100 * delay, delay)

    }    
};

let intervalId = setInterval(func, 100, 1);