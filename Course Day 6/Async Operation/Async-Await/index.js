const printString = (str) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(str);
                resolve();
            },
            Math.floor(Math.random() * 100) + 1
        )
    })
}

const printAll = async () => {
    try {
        await printString("A")
        await printString("L")
        await printString("O")
        await printString("K")
    } catch (error) {
        console.log("Error", error)
    }
}

printAll()