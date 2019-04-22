const Readline = require('readline');
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

num1 = Math.floor((Math.random() * 10) + 1);
num2 = Math.floor((Math.random() * 10) + 1);
answer = num1 + num2;
rl.question(`What is ${num1} + ${num2}? \n`, (res) => {
    if (answer== res.trim() ) {
        console.log(`Correct`);
        rl.close();
    }
    else {
        console.log(`Incorrect`);
        rl.setPrompt(`Try again \n`);
        rl.prompt();
        rl.on('line', (input) => {
            if (input.trim() == answer) {
                console.log(`Correct`);
                rl.close();
            }
            else{
                rl.setPrompt(`Try again 2 \n`);
                rl.prompt();        
            }
        })
    }
})
// rl.close() emit 'close' event
rl.on('close', () => {
    console.log('Close event triggered');
})