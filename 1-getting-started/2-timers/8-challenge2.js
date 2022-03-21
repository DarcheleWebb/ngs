// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let count = 0;

const func = () => {
    console.log('Hello World');
    count += 1;

    if (count >= 5) {
        clearInterval(intervalId);
        console.log('Done');
    }    
};

const intervalId = setInterval(func, 1000);



