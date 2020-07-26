import Robot from './Robot';
import { play } from './util';

const stdin = process.stdin;
const stdout = process.stdout;

stdin.setEncoding('utf8');


//create the robot object by defining it's outer limits
let c3po = new Robot(0,0,5,5);

stdout.write('Start giving commands to move the robot. \'exit\' when you are done \n');
stdin.on('data', (data: Buffer) => {
    let inputString = data.toString().trim();
    if(inputString.toLowerCase() === 'exit') {
        stdout.write('Hope you had fun. Bye!');
        process.exit();
    }

    play(c3po, inputString.toLowerCase());

    //A commands input file can also be processed
    // processInputFile(c3po, inputString.toLowerCase());
});