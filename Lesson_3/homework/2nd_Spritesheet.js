const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// VARIABLES
canvas.width = 500;
canvas.height = 500;
const frameWidth = 245;
const frameHeight = 235;
const xCenterOfCanvas = canvas.width / 2 - frameWidth / 2;
const yCenterOfCanvas = canvas.height / 2 - frameHeight / 2;
let frameIndex = 0;

const fps = 1000 / 7.5; // after long testing, I have figured out that it is to fast to be completed
                        // in one second so I put it in 2 seconds. There are 15 frames in sprite sheet.
                        // 15 / 2 = 7.5   

// THESE ARRAYS REPRESENT COORDINATE SETS FOR EACH FRAME
const arrayOfXCoordinates = [0, 256, 512, 768, 1024, 0, 256, 512, 768, 1024, 0, 256, 512, 768, 1024];
const arrayOfYCoordinates = [0, 0, 0, 0, 0, 249, 249, 249, 249, 249, 498, 498, 498, 498, 498];

// console.log("Canvas width: " + canvas.width);
// console.log("Canvas height: " + canvas.height);
// console.log("xCenterOfCanvas: " + xCenterOfCanvas);
// console.log("yCenterOfCanvas: " + yCenterOfCanvas);

const spriteSheetImage = new Image;
spriteSheetImage.src = "Lesson_3/homework/assets/explosion.jpg";

// METHOD WHICH GETS ME CORRECT FRAME (1 TO 15)
function drawFrame() {
    context.drawImage(
        spriteSheetImage,                       // image that will be used 
        arrayOfXCoordinates[frameIndex],        // x-coordinate where it will start taking the picture
        arrayOfYCoordinates[frameIndex],        // y-coordinate where it will start taking the picture
        frameWidth,                             // width of the picture it will take
        frameHeight,                            // height of the picture it will take 
        xCenterOfCanvas,    
        yCenterOfCanvas,
        frameWidth,
        frameHeight
    );
}

// METHOD WHICH UPDATES THE NUMBER OF INDEX FRAME AND THEREFORE CHANGES THE SELECTED FRAME
function frame() {
    drawFrame();

    frameIndex++;

    if (frameIndex === 15) {
        frameIndex = 0;
    }
}

// MAIN FUNCTION WHICH IS RESPONSIBLE FOR CLEARING, TAKING FRAME AND REQUESTING FRAME
function getFrame() {
    // CLEAR EVERYTHING 
    context.clearRect(0, 0, canvas.width, canvas.height);

    // GETTING PICTURE
    frame();

    // REQUEST ANIMATION FRAME
    setTimeout(() => {
        requestAnimationFrame(getFrame);
    }, fps);
    
}

getFrame();