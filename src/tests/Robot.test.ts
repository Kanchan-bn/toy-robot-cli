import chai from 'chai';
import Robot from '../robot';

let robot1: Robot;

beforeEach(function () {
    robot1 = new Robot(0,0,5,5);
})

describe('Tests that robot can\'t be moved without being placed', function () {
    it('trying to move without placing the robot', () => {
        robot1.move();
        chai.assert.equal(robot1.isInPlace, false);
    });
});

describe('Tests that robot can\'t be turned without being placed', function () {
    it('trying to turn left without placing the robot', () => {
        robot1.left();
        chai.assert.equal(robot1.isInPlace, false);
        chai.assert.equal(robot1.facing, '');
    });
    it('trying to turn right without placing the robot', () => {
        robot1.right();
        chai.assert.equal(robot1.isInPlace, false);
        chai.assert.equal(robot1.facing, '');
    });
});

describe('Tests that robot cannot be placed outside the table', function () {
    it('robot placed in position -1,0 is not in place', () => {
        robot1.placeRobot(-1,0,'east');
        chai.assert.equal(robot1.isInPlace, false);
    });

    it('robot placed in position 5,6 is not in place', () => {
        robot1.placeRobot(5,6,'north');
        chai.assert.equal(robot1.isInPlace, false);
    });
});

describe('Tests place robot on table success', function () {
    it('verifies successful placing of the robot', () => {
        robot1.placeRobot(0,0,'north');
        
        chai.assert.equal(robot1.xPosition, 0);
        chai.assert.equal(robot1.yPosition, 0);
        chai.assert.equal(robot1.facing, 'north');
        chai.assert.equal(robot1.isInPlace, true);
    });
});

describe('Test move robot success', function () {
    it('robot moved 1 place north from 0,1', () => {
        robot1.placeRobot(0,1,'north');
        robot1.move();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 1);
        chai.assert.equal(robot1.yPosition, 1);
        chai.assert.equal(robot1.facing, 'north');
    });

});

describe('Tests that robot doesn\'t move out of the table', function () {
    it('robot not moved 1 place south from 0,1', () => {
        robot1.placeRobot(0,1,'south');
        robot1.move();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 0);
        chai.assert.equal(robot1.yPosition, 1);
        chai.assert.equal(robot1.facing, 'south');
    });

    it('robot not moved 1 place west from 1,0', () => {
        robot1.placeRobot(1,0,'west');
        robot1.move();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 1);
        chai.assert.equal(robot1.yPosition, 0);
        chai.assert.equal(robot1.facing, 'west');
    });

    it('robot not moved 1 place north from 15,5', () => {
        robot1.placeRobot(5,5,'north');
        robot1.move();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 5);
        chai.assert.equal(robot1.yPosition, 5);
        chai.assert.equal(robot1.facing, 'north');
    });

    it('robot not moved 1 place east from 15,5', () => {
        robot1.placeRobot(5,5,'east');
        robot1.move();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 5);
        chai.assert.equal(robot1.yPosition, 5);
        chai.assert.equal(robot1.facing, 'east');
    });

});

describe('Test left turn robot success', function () {
    it('robot turned left of north', () => {
        robot1.placeRobot(0,1,'north');
        robot1.left();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 0);
        chai.assert.equal(robot1.yPosition, 1);
        chai.assert.equal(robot1.facing, 'west');
    });
    it('robot turned left of south', () => {
        robot1.placeRobot(0,1,'south');
        robot1.left();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 0);
        chai.assert.equal(robot1.yPosition, 1);
        chai.assert.equal(robot1.facing, 'east');
    });
    it('robot turned left of east', () => {
        robot1.placeRobot(0,1,'east');
        robot1.left();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 0);
        chai.assert.equal(robot1.yPosition, 1);
        chai.assert.equal(robot1.facing, 'north');
    });
    it('robot turned left of west', () => {
        robot1.placeRobot(0,1,'west');
        robot1.left();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 0);
        chai.assert.equal(robot1.yPosition, 1);
        chai.assert.equal(robot1.facing, 'south');
    });

});
describe('Test right turn robot success', function () {
    it('robot turned right of north', () => {
        robot1.placeRobot(0,1,'north');
        robot1.right();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 0);
        chai.assert.equal(robot1.yPosition, 1);
        chai.assert.equal(robot1.facing, 'east');
    });
    it('robot turned right of south', () => {
        robot1.placeRobot(0,1,'south');
        robot1.right();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 0);
        chai.assert.equal(robot1.yPosition, 1);
        chai.assert.equal(robot1.facing, 'west');
    });
    it('robot turned right of east', () => {
        robot1.placeRobot(0,1,'east');
        robot1.right();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 0);
        chai.assert.equal(robot1.yPosition, 1);
        chai.assert.equal(robot1.facing, 'south');
    });
    it('robot turned right of west', () => {
        robot1.placeRobot(0,1,'west');
        robot1.right();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 0);
        chai.assert.equal(robot1.yPosition, 1);
        chai.assert.equal(robot1.facing, 'north');
    });

});

describe('Testing robot movements', () => {
    it('robot moves from 0,1, west to 4,5,east', () => {
        robot1.placeRobot(0,1,'west');
        robot1.right();
        robot1.move();
        robot1.move();
        robot1.move();
        robot1.move();
        robot1.right();
        robot1.move();
        robot1.move();
        robot1.move();
        robot1.move();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 4);
        chai.assert.equal(robot1.yPosition, 5);
        chai.assert.equal(robot1.facing, 'east');
    });

    it('robot moves from 5,5,east to 4,0,north', () => {
        robot1.placeRobot(5,5,'east');
        robot1.right();
        robot1.move();
        robot1.right();
        robot1.move();
        robot1.move();
        robot1.move();
        robot1.move();
        robot1.move();
        robot1.right();
        chai.assert.equal(robot1.isInPlace, true);
        chai.assert.equal(robot1.xPosition, 4);
        chai.assert.equal(robot1.yPosition, 0);
        chai.assert.equal(robot1.facing, 'north');
    });
});
