const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const n = parseInt(line, 10);
    
    for (let i = 1; i <= n ; i++) {
        console.log('*'.repeat(i));
    }
    
    rl.close();
})