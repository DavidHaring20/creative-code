console.log("This is a proof of successful communication between Js and Html.");

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
        context.fillStyle = 'red';
        context.strokeStyle = 'yellow';
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

// AN ARRAY WHERE WE WILL STORE CIRCLES 
var arrayOfCircles = [];

// CREATE FOR-LOOP WHERE WE WILL CREATE AND STORE ALL CIRCLES INTO "arrrayOfCircles"
for (var i = 0; i < 200; i++) {
    // VARIABLE DECLARATION
    // RANDOM x (x coordinate), RANDOM y (y coordinate), RANDOM dx (movemenet speed on x axis), 
    // RANDOM dy (movement speed on y axis) and NOT-RANDOM radius 
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2)+ radius;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    arrayOfCircles.push(new Circle(x, y, dx, dy, radius));
}

// CALL FOR ANIMATION FUNCTION
animate();