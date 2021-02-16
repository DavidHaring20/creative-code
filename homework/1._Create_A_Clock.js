// CHECK IF THERE IS SUCCESSFULL CONNECTION
console.log("Hello there from \"1._Create_A_Clock.js\"file.");

// ASSIGN CONTEXT TO VARIABLE AND ADD IT TO DO 2D DRAWING 
const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

// WIDTH AND HEIGHT OF OUR CANVAS
const width = canvas.width;
const height = canvas.height;

// INITIALIZE VARIABLES FOR THE CLOCK 
const radiusOfTheOuttestCircle = 200;
const radiusOfTheInnest = 4;
const xCoordinateOfCenter = 300;
const yCoordinateOfCenter = 300;
context.font = "50px Montserrat";

// console.log("Canvas's width: " + width + "\nCanvas's height: " + height);


function drawCirclesOfAClock() {
    // OUTER CIRCLE FOR A CLOCK
    context.beginPath();
    context.lineWidth = 10;
    context.arc(xCoordinateOfCenter, yCoordinateOfCenter, radiusOfTheOuttestCircle, 0, Math.PI * 2, false);
    context.stroke();


    // DRAW CIRCLE FOR NEEDLES
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.arc(xCoordinateOfCenter, yCoordinateOfCenter, radiusOfTheInnest, 0, Math.PI * 2, false);
    context.stroke();
}

// WRITE NUMBERS 
// center of clock = (300, 300)
// distance from center of clock and the outtest circle = 200

function drawMainNumbers() {
    // WRITE 12/0
    context.fillText("XII", 265, 150);

    // WRITE 1 
    context.fillText("I", 375, 180);

    // WRITE 2 
    context.fillText("II", 420, 240);

    // WRITE 3
    context.fillText("III", 440, 315);

    // WRITE 4
    context.fillText("IV", 420, 395);

    // WRITE 5
    context.fillText("V", 370, 460);

    // WRITE 6
    context.fillText("VI", 270, 485);

    // WRITE 7
    context.fillText("VII", 180, 460);

    // WRITE 8
    context.fillText("VIII", 120, 390);

    // WRITE 9
    context.fillText("IX", 110, 315);

    // WRITE 10
    context.fillText("X", 130, 240);

    // WRITE 11 
    context.fillText("XI", 180, 180);
}

function drawHourAndMinuteNeedles() {
    // DRAW HOUR NEEDLE 
    context.beginPath();
    context.lineWidth = 7;
    context.moveTo(xCoordinateOfCenter, yCoordinateOfCenter);
    context.lineTo(200, 300);
    context.stroke();

    // DRAW MINUTE NEEDLE 
    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(xCoordinateOfCenter, yCoordinateOfCenter);
    context.lineTo(150, 260);
    context.stroke();
}

var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

// DRAW SECONDS NEEDLE 
// context.beginPath();
// context.lineWidth = 3;
// context.moveTo(xCoordinateOfCenter, yCoordinateOfCenter);
// context.lineTo(390, 170);
// context.stroke();

function drawBody() {
    drawCirclesOfAClock();
    drawMainNumbers();
    drawHourAndMinuteNeedles();
}

function moveSecond() {
    
    var xCoordinatesOfSeconds = [300, 315, 330, 345, 360, 380, 390, 400, 410, 420, 430, 435, 440, 445, 447, 450, 445, 445, 435, 430, 422, 417, 406, 398, 390, 372, 354, 336, 318, 300, 282, 264, 246, 228, 210, 198, 186, 174, 162, 150, 148, 146, 144, 142, 140, 142, 144, 146, 148, 150, 160, 170, 180, 190, 200, 220, 240, 260, 280, 300];
    var yCoordinatesOfSeconds = [140, 145, 150, 155, 168, 170, 180, 190, 205, 220, 230, 245, 260, 275, 290, 300, 320, 340, 360, 380, 390, 408, 415, 425, 440, 446, 452, 458, 464, 470, 464, 458, 452, 446, 440, 426, 412, 398, 384, 370, 356, 342, 328, 314, 300, 285, 270, 255, 240, 225, 214, 203, 192, 182, 170, 164, 158, 152, 146, 140];

    for (var i = 0; i < 60; i++) {
        // CLEAR EVERYTHING
        context.clearRect(0, 0, width, height);

        // WE NEED TO DRAW BODY
        drawBody();
        
        // NOW WE NEED TO REDRAW THE NEEDLE FOR SECONDS 
        context.beginPath();
        context.lineWidth = 3;
        context.moveTo(xCoordinateOfCenter, yCoordinateOfCenter);
        context.lineTo(xCoordinatesOfSeconds[i], yCoordinatesOfSeconds[i]);
        context.stroke();
        console.log(xCoordinatesOfSeconds + "" + yCoordinatesOfSeconds);
    }
}