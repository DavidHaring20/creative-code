console.log("This is a proof of successful communication between Js and Html.");

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let circleBodyColor;
let circleLineColor;
let numberOfCircles = 30;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

getNewColors();

window.addEventListener("click", () => {
    eatCircle();
});

// METHOD WHICH CREATES A CIRCLE AND UPDATES IT'S MOVEMENT 
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    
    // FUNCTION FOR DRAWING NEW CIRCLE
    this.draw = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = circleBodyColor;
        context.strokeStyle = circleLineColor;
        context.stroke();
        context.fill();
    }

    // FUNCTION WITH LOGIC FOR MOVEMENT OF THE CIRCLES
    this.update = function() {
        // MOVING CIRCLES LEFT AND RIGHT
        if (this.x + this.radius + 1 > innerWidth || this.x - this.radius < 0 ) {
            this.dx = -this.dx;
        }

        // MOVING CIRCLE UP AND DOWN
        if (this.y + this.radius + 1 > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    
        // AFTER MOVEMENT IS UPDATED, DRAW EVERYTHING AGAIN
        this.draw();
    }
}

// FUNCTION WHICH ANIMATES THE CIRCLE MOVEMENT
function animate() {
    // CALL TO METHOD
    requestAnimationFrame(animate);

    // CLEAR EVERYTHING
    context.clearRect(0, 0, innerWidth, innerHeight);

    // DRAW EVERYTHING
    // FOR LOOP WHERE WE WILL DRAW ALL CIRCLES IN THE ARRAY 
    for (var i = 0; i < arrayOfCircles.length; i++) {
        arrayOfCircles[i].update();
    }
}

function eatCircle() {
    let length = arrayOfCircles.length;
    let biggestRadius = arrayOfCircles[length - 1].radius;
    
    if (length > 1 && biggestRadius * 3 < canvas.width - 200 && biggestRadius * 3 < canvas.height - 50) {
        let lastCircle = arrayOfCircles[arrayOfCircles.length - 1];
        let preLastCircle = arrayOfCircles[arrayOfCircles.length - 2];
    
        // GET RADIUS OF THE LAST CIRCLE
        let radiusOfPreLastCircle = preLastCircle.radius;

        // ADD THE RADIUS TO THE PRE-LAST CIRCLE 
        lastCircle.radius += radiusOfPreLastCircle;

        // DELETE LAST CIRCLE 
        arrayOfCircles.splice(arrayOfCircles.length - 2, 1);
    }
};

// AN ARRAY WHERE WE WILL STORE CIRCLES 
var arrayOfCircles = [];

// CREATE FOR-LOOP WHERE WE WILL CREATE AND STORE ALL CIRCLES INTO "arrrayOfCircles"
for (var i = 0; i < numberOfCircles; i++) {
    // VARIABLE DECLARATION
    // RANDOM x (x coordinate), RANDOM y (y coordinate), RANDOM dx (movemenet speed on x axis), 
    // RANDOM dy (movement speed on y axis) and RANDOM radius 
    var radius = Math.random() * 50;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2)+ radius;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    arrayOfCircles.push(new Circle(x, y, dx, dy, radius));
}

// METHOD THAT GIVES RANDOM COLOR 
function getNewColors() {
    circleBodyColor = getRandomColor();
    circleLineColor = getRandomColor();
    canvas.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

setInterval(() => {
    getNewColors();
}, 4000);

// CALL FOR ANIMATION FUNCTION
animate();