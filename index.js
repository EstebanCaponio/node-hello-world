// console.log('Hello Boolean');
// console.log(process.argv);

if (process.argv.length > 2) {

    let newString = process.argv[2];

    for (let i = 3; i < process.argv.length; i++) {

        newString+= ` ${process.argv[i]}`;
    }

    console.log(newString);

} else console.log('Hello Boolean');