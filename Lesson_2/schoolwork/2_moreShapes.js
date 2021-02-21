console.log("This is a proof of successful communication between Js and Html.");

// WE NEED TO USE "const" AS CANVAS AND 
const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// SETTING THE WIDTH AND HEIGHT OF CANVAS ELEMENT
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

var score = 0;

redraw();

// SAVING THE KEY PRESS AND DISPLAYING IT IN THE CONSOLE LOG 
window.addEventListener("keydown", ({ key }) => {
    if (key === "w" || key === "s" || key === "a" || key === "d") {
        score++;
        context.clearRect(0, 0, canvas.width, canvas.height);
        redraw();
    }
});

function redraw() {
    // SHOW SCORE 0 IN THE UPPER RIGHT CORNER
    const x = window.innerWidth * 0.90, y = 50;
    context.font = "30px Montserrat";
    context.fillText(`Score: ${score}`, x, y);

    // DRAW A CIRCLE
    context.beginPath();
    context.arc(200, 200, 50, 0, Math.PI * 2, false);
    context.stroke();

    // DRAW A LINE
    context.beginPath();
    context.moveTo(300, 300);
    context.lineTo(200, 200);
    context.closePath();
    context.stroke();


    // DRAW A TRIANGLE 
    context.beginPath();
    context.moveTo(500, 500);
    context.lineTo(400, 500);
    context.lineTo(450, 400);
    context.lineTo(500, 500);
    context.fillStyle = 'blue';
    context.fill();
    context.stroke();
}