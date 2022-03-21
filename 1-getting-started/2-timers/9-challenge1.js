const func = (delay) => {
    console.log(`Hello World. ${delay}`)
    delay += 1
    setTimeout(func, 1000 * delay, delay)
}

setTimeout(func, 1000, 1)