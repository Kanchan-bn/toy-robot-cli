import { stdout } from "process";

export default class Robot {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    xPosition: number = -1; 
    yPosition: number = -1; 
    facing: string = '';
    isInPlace: boolean = false;

    directions :Array<string> = ['north', 'east', 'south', 'west'];

    constructor(minX: number, minY: number, maxX: number, maxY: number) {
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
    }

    checkForPosition(x: number,y: number) {
        if(x < this.minX || y < this.minY || x > this.maxX || y > this.maxY) {
           return false;
        }
        return true;
    }
    
    placeRobot(x: number, y: number, direction: string){
        if(!this.checkForPosition(x,y) || (this.directions.indexOf(direction) === -1)) {
            return;
        }
        this.xPosition = x;
        this.yPosition = y;
        this.facing = direction;
        this.isInPlace = true;
    }

    move() {
        if(!this.isInPlace) {
            return;
        }
        let newX = this.xPosition;
        let newY = this.yPosition;
        
        switch(this.facing) {
            case 'north': newX += 1;
            break;
            case 'east' : newY += 1;
            break;
            case 'south': newX -= 1;
            break;
            case 'west': newY -= 1;
            break;
        }

        if(this.checkForPosition(newX, newY)) {
            this.xPosition = newX;
            this.yPosition = newY
        }

    }

    left() {
        if(!this.isInPlace) {
            return;
        }
        let newDirectionIndex: number  = this.directions.indexOf(this.facing) - 1;

        if(newDirectionIndex < 0) {
            newDirectionIndex = this.directions.length-1;
        }

        this.facing = this.directions[newDirectionIndex];
    }

    right() {
        if(!this.isInPlace) {
            return;
        }
        let newDirectionIndex: number  = this.directions.indexOf(this.facing) + 1;

        if(newDirectionIndex > this.directions.length-1) {
            newDirectionIndex = 0;
        }

        this.facing = this.directions[newDirectionIndex];
    }

    report() {
        if(this.xPosition == -1) {
            stdout.write('The robot is not in position yet \n');
            return;
        }
        stdout.write('The robot is in position : '+ this.xPosition+', '+this.yPosition+', and facing ' +this.facing +"\n");
    }
}