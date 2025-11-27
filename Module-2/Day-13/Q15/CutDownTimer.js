let seconds = 10;

let countdown = setInterval(() => {
    console.log(seconds);
    seconds--;

    if (seconds < 0) {
        clearInterval(countdown);
        console.log("Countdown Complete!");
    }
}, 1000);

setTimeout(() => {
    const keyPressed = "s";

    if (keyPressed === "s") {
        clearInterval(countdown);
        console.log("Countdown Stopped by User");
    }
}, 3000);
