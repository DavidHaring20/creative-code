const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// let resizeCount = 0;
let circleX;
let circleY;

let boxX = 20;
let firstBox;

let lastTime;
let requiredElapsed = 1000 / 15; // 15 FPS

// THIS WILL SET WIDTH AND HEIGHT ON LOAD
window.addEventListener("load", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log("Event listener sends his regards.");
    console.log("This is width: " + canvas.width + "px \nand this is height: " + canvas.height + "px");

    setup();
});

// THIS WILL SET NEW WIDTH AND HEIGHT EACH TIME WINDOW IS RESIZED
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // console.log("Resize number: " + resizeCount);
    // resizeCount++;
});

function draw(now) {
    requestAnimationFrame(draw);

    if(!lastTime) {
        lastTime = now;
    }

    const elapsedTime = now - lastTime; // elapsed time is delta time
    if (elapsedTime > requiredElapsed) {
        update();

        context.fillStyle = "purple";
        context.fillRect(0, 0, canvas.width, canvas.height);

        circleX += 1;
        circleY += 1;

        context.fillStyle = 'white';
        context.beginPath();
        context.arc(circleX, circleY, 50, 0, Math.PI * 2);
        context.fill();

        firstBox.draw(context);
        
        lastTime = now;
    }
}

function update() {
    boxX += 10;
    firstBox.x = boxX;
}

function setup() {
    circleX = canvas.width / 1000;
    circleY = canvas.height / 1000;
    firstBox = new EmptyBox(50, 50, 200, 300);
    draw();
}