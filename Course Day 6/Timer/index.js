const timer1 = setInterval(() => {
    console.log("Alok");
}, 2000);

setTimeout(() => {
    console.log("TEST");
    clearInterval(timer1);
}, 9000);

