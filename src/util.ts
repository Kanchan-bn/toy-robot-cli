import fs from 'fs';
import { stdout } from "process";
import Robot from './robot';

export const processInputFile = (robot: Robot, input: string) => {
    //Check for the validity of the commands text file
    if(!input.includes('.txt')){
        stdout.write('Please input a .txt file \n');
        return;
    }
    try{
        let fileInput = fs.readFileSync(input, {encoding:'utf8', flag:'r'});
        //Split the input by line and run each line as a command
        fileInput.split('\r\n').forEach(line => {
            play(robot, line);
        });
        process.exit();
    }catch(error) {
        console.log(error.message + '\n');
        process.exit();
    }
}


export const play = (robot: Robot, input: string) => {
    if(input.toLowerCase().includes('place')) {
        let inputArr = input.split(' ');
        if(inputArr.length < 2) {
            stdout.write('Invalid input. Try again. \n');
            return;
        }
        let coordDetails = inputArr[1].split(',');
        if(coordDetails.length < 3) {
            stdout.write('Invalid input. Try again. \n');
            return;
        }
        let x: number = parseInt(coordDetails[0]);
        let y: number = parseInt(coordDetails[1]);
        const dir = coordDetails[2].toLowerCase();

        robot.placeRobot(x, y, dir);
    }

    if(input.toLowerCase().includes('move')) {
        robot.move();
    }

    if(input.toLowerCase().includes('left')) {
        robot.left();
    }

    if(input.toLowerCase().includes('right')) {
        robot.right();
    }

    if(input.toLowerCase().includes('report')) {
        robot.report();
    }

}