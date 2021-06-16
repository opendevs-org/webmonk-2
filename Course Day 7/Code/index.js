const path = require('path');
const fs = require('fs').promises;

console.log(path.isAbsolute(`./dummy.txt`)); // false

console.log(path.isAbsolute('E:/Teaching/Webmonks 2/Course Day 6/Code/dummy.txt')); // true

console.log(path.join('E:/Teaching', 'Webmonks 2/', 'Course Day 6/Code', 'dummy.txt'));

console.log(path.resolve('./dummy.txt'));

const doFileOperations = async () => {
    try {
        const data = await fs.readFile(path.resolve('./dummy.txt'));
        console.log(data.toString());

        await fs.writeFile(path.resolve('./dummy.txt'), `${data}\n is awesome!`, 'utf8');

        setTimeout(async () => {
            await fs.unlink(path.resolve('./dummy.txt'));
        }, 10 * 1000);
    } catch (error) {
        console.error(error);
    }
}

doFileOperations();