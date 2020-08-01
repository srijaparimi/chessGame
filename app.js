var queen = {
    position: {
        row: 0,
        column: 0
    },
    direction: 'S'
};
var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"]
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
];
// declarations
var steps, direction, flag = "yes";
let temp, temp2;
// Multiple inputs till user enters no
while (flag != "no") {
    direction = window.prompt("Enter the direction");
    steps = parseInt(window.prompt("Enter no. of steps"));
    moveQueen(direction, steps);
    flag = window.prompt("Do you want to continue yes/no");
}
// function to move queen object
function moveQueen(direction, steps) {
    switch (direction) {
        case 'S':
            temp = queen.position.row + steps;
            if (temp > 8 || temp < 0) {
                console.log("out of boundary");
                document.write("Out of Boundary");
            } else {
                queen.position.row = queen.position.row + steps;
            }
            break;
        case 'N':
            temp = queen.position.row - steps;
            if (temp > 8 || temp < 0) {
                console.log("out of boundary");
                document.write("Out of Boundary");
            } else {
                queen.position.row = queen.position.row - steps;
            }
            break;
        case 'E':
            temp = queen.position.column + steps;
            if (temp > 8 || temp < 0) {
                console.log("out of boundary");
                document.write("Out of Boundary");
            } else {
                queen.position.column = queen.position.column + steps;
            }
            break;
        case 'W':
            temp = queen.position.column - steps;
            if (temp > 8 || temp < 0) {
                console.log("out of boundary");
                document.write("Out of Boundary");
            } else {
                queen.position.column = queen.position.column - steps;
            }
            break;
        case 'NE':
            temp = queen.position.row - steps;
            temp2 = queen.position.column + steps;
            if (temp > 8 || temp < 0 || temp2 > 8 || temp2 < 0) {
                console.log("out of boundary");
                document.write("Out of Boundary");
            } else {
                queen.position.row = queen.position.row - steps;
                queen.position.column = queen.position.column + steps;
            }
            break;
        case 'NW':
            temp = queen.position.row - steps;
            temp2 = queen.position.column - steps;
            if (temp > 8 || temp < 0 || temp2 > 8 || temp2 < 0) {
                console.log("out of boundary");
                document.write("Out of Boundary");
            } else {
                queen.position.row = queen.position.row - steps;
                queen.position.column = queen.position.column - steps;
            }
            break;
        case 'SE':
            temp = queen.position.row + steps;
            temp2 = queen.position.column + steps;
            if (temp > 8 || temp < 0 || temp2 > 8 || temp2 < 0) {
                console.log("out of boundary");
                document.write("Out of Boundary");
            } else {
                queen.position.row = queen.position.row + steps;
                queen.position.column = queen.position.column + steps;
            }
            break;
        case 'SW':
            temp = queen.position.row + steps;
            temp2 = queen.position.column - steps;
            if (temp > 8 || temp < 0 || temp2 > 8 || temp2 < 0) {
                console.log("out of boundary");
                document.write("Out of Boundary");
            } else {
                queen.position.row = queen.position.row + steps;
                queen.position.column = queen.position.column - steps;
            }
            break;
    }
    console.log(queen.position.row);
    console.log(queen.position.column);
    console.log(board[queen.position.row][queen.position.column]);
}