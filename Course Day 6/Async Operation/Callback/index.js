// function printString(string) {
//     setTimeout(
//         () => {
//             console.log(string)
//         },
//         Math.floor(Math.random() * 100) + 1
//     )
// }

// function printAll() {
//     printString("A")
//     printString("B")
//     printString("C")
// }
// printAll()

// fix with callback
function printStringWithCb(string, callbackFunc) {
    setTimeout(
        () => {
            console.log(string)
            callbackFunc()
        },
        Math.floor(Math.random() * 100) + 1
    )
}
// Callback Hell
// To deal with this callback hell, Promises got introduced
function printAllWithCb() {
    printStringWithCb("A", () => {
        printStringWithCb("B", () => {
            printStringWithCb("C", () => { })
        })
    })
}
printAllWithCb()
