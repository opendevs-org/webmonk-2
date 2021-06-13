function printString(string) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(string)
                resolve()
            },
            Math.floor(Math.random() * 100) + 1
        )
    })
}
// .then chaining - Async Await is introduced

function printAll() {
    printString("A")
        .then(() => {
            return printString("L")
        })
        .then(() => {
            return printString("O")
        })
        .then(() => {
            return printString("k")
        })
        .catch(()=> {
            console.log("Error")
        })
}
printAll()