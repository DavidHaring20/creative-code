const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// CHECK IF THERE IS SUCCESSFULL CONNECTION BETWEEN INDEX.HTML AND THIS SCRIPT
console.log("Hello from \"1._Create_A_Clock.js\" !");

function setUp() {
    // SET CANVAS WIDTH AND CANVAS HEIGHT
    const width = 900;
    const height = 550;

    canvas.width = width;
    canvas.height = height;
    console.log("This is width: " + width);
    console.log("This is height: " + height);

    // SET PARAMETERS FOR VERTICAL LINES
    const xOfVerticalLine1 = 300;
    const xOfVerticalLine2 = 600;
    const yOfUpperPartOfVerticalLine = 0;
    const yOfLowerPartOfVerticalLin = 900;

    // DRAW LINES WHICH WILL SEPARATE HOURS, MINUTES AND SECONDS
    context.beginPath();
    context.moveTo(xOfVerticalLine1, yOfUpperPartOfVerticalLine);
    context.lineTo(xOfVerticalLine1, yOfLowerPartOfVerticalLin);
    context.stroke();

    context.beginPath();
    context.moveTo(xOfVerticalLine2, yOfUpperPartOfVerticalLine);
    context.lineTo(xOfVerticalLine2, yOfLowerPartOfVerticalLin);
    context.stroke();
}

function drawHours() {
    let now = new Date();
    let hoursNow = now.getHours();
    // SECTION FOR HOURS 
    // 1 TO 6
    hLine1 = new Line(100, 150, 100, 250);
    hLine2 = new Line(100, 250, 200, 250);
    hLine3 = new Line(200, 250, 200, 150);
    hLine4 = new Line(200, 150, 100, 150);
    hLine5 = new Line(100, 150, 200, 250);
    hLine6 = new Line(200, 150, 100, 250);

    // 7 TO 12
    hLine7 = new Line(100, 300, 100, 400);
    hLine8 = new Line(100, 400, 200, 400);
    hLine9 = new Line(200, 400, 200, 300);
    hLine10 = new Line(200, 300, 100, 300);
    hLine11 = new Line(100, 300, 200, 400);
    hLine12 = new Line(200, 300, 100, 400);

    // CREATE AND POPULATE ARRAY WITH LINES NEEDED TO CREATE HOUR FIGURES 
    const arrayForLineLocationsForHours = [];
    arrayForLineLocationsForHours.push(hLine1);
    arrayForLineLocationsForHours.push(hLine2);
    arrayForLineLocationsForHours.push(hLine3);
    arrayForLineLocationsForHours.push(hLine4);
    arrayForLineLocationsForHours.push(hLine5);
    arrayForLineLocationsForHours.push(hLine6);
    arrayForLineLocationsForHours.push(hLine7);
    arrayForLineLocationsForHours.push(hLine8);
    arrayForLineLocationsForHours.push(hLine9);
    arrayForLineLocationsForHours.push(hLine10);
    arrayForLineLocationsForHours.push(hLine11);
    arrayForLineLocationsForHours.push(hLine12);

    for (let i = 0; i < hoursNow; i++) {
        arrayForLineLocationsForHours[i].draw(context);
    }
}

function drawMinutes() {
    let now = new Date();
    let minutesNow = now.getMinutes();      
    // SECTION FOR MINUTES 
    // CREATE ARRAY WHICH WILL HAVE ALL LOCATIONS FOR MINUTES SHAPES
    const arrayForLineLocationsForMinutes = [];

    for (let i = 0; i < 10; i++) {
        mLine1 = new Line(360, 50, 360, 100);
        mLine2 = new Line(360, 100, 420, 100);
        mLine3 = new Line(420, 100, 420, 50);
        mLine4 = new Line(420, 50, 360, 50);
        mLine5 = new Line(360, 50, 420, 100);
        mLine6 = new Line(360, 100, 420, 50);

        arrayForLineLocationsForMinutes.push(mLine1);
        arrayForLineLocationsForMinutes.push(mLine2);
        arrayForLineLocationsForMinutes.push(mLine3);
        arrayForLineLocationsForMinutes.push(mLine4);
        arrayForLineLocationsForMinutes.push(mLine5);
        arrayForLineLocationsForMinutes.push(mLine6);
    }

    for (let i = 0; i < minutesNow; i++) {
        let multiple;

        if (i >= 30 ) {
            multiple = Math.floor((i - 30) / 6);
        } else {
            multiple = Math.floor(i / 6);
        }
        let moveToRight = Math.floor(i / 30);    

        arrayForLineLocationsForMinutes[i].x1 += 120 * moveToRight;
        arrayForLineLocationsForMinutes[i].y1 += 100 * multiple;
        arrayForLineLocationsForMinutes[i].x2 += 120 * moveToRight
        arrayForLineLocationsForMinutes[i].y2 += 100 * multiple;
        arrayForLineLocationsForMinutes[i].draw(context);
    }
}

function drawSeconds() {
    let now = new Date();
    let secondsNow = now.getSeconds();
    // SECONDS SECTION 
    // CREAT AN ARRAY WHICH WILL HOLD ALL LOCATIONS FOR SECONDS SHAPES
    const arrayForLineLocationsForSeconds = [];

    for (let i = 0; i < 10; i++) {
        sLine1 = new Line(660, 50, 660, 100);
        sLine2 = new Line(660, 100, 720, 100);
        sLine3 = new Line(720, 100, 720, 50);
        sLine4 = new Line(720, 50, 660, 50);
        sLine5 = new Line(660, 50, 720, 100);
        sLine6 = new Line(660, 100, 720, 50);

        arrayForLineLocationsForSeconds.push(sLine1);
        arrayForLineLocationsForSeconds.push(sLine2);
        arrayForLineLocationsForSeconds.push(sLine3);
        arrayForLineLocationsForSeconds.push(sLine4);
        arrayForLineLocationsForSeconds.push(sLine5);
        arrayForLineLocationsForSeconds.push(sLine6);
    }

    for (let i = 0; i < secondsNow; i++) {
        let multiple;

        if (i >= 30 ) {
            multiple = Math.floor((i - 30) / 6);
        } else {
            multiple = Math.floor(i / 6);
        }
        let moveToRight = Math.floor(i / 30);

        arrayForLineLocationsForSeconds[i].x1 += 120 * moveToRight;
        arrayForLineLocationsForSeconds[i].y1 += 100 * multiple;
        arrayForLineLocationsForSeconds[i].x2 += 120 * moveToRight;
        arrayForLineLocationsForSeconds[i].y2 += 100 * multiple;
        arrayForLineLocationsForSeconds[i].draw(context);
    }
}

function drawEverything() {
    setUp();
    drawHours();
    drawMinutes();
    drawSeconds();
}

function clock() {
    // CLEAR EVERYTHING 
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // DRAW EVERYTHING
    drawEverything();

    setTimeout(() => {
        console.log();
        requestAnimationFrame(clock);
    }), 1000;
}

clock();