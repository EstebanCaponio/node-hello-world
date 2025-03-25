// console.log('Hello Boolean');
// console.log(process.argv);

if (process.argv.length > 2) {

    let newString = '';

    for (let i = 2; i < process.argv.length; i++) {

        newString+= ` ${process.argv[i]}`;
    }

    console.log(newString);

} else console.log('Hello Boolean');