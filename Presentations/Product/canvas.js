console.log("This is a proof of successful communication between Js and Html.");

var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

/* context.fillStyle = 'rgba(255, 0, 0, 0.5)';
context.fillRect(100, 100, 100, 100);
context.fillRect(200, 200, 100, 100);
context.fillRect(300, 300, 100, 100);
context.fillRect(300, 100, 100, 100);
context.fillStyle = 'rgba(0, 255, 0, 0.5)';
context.fillRect(200, 400, 100, 100);
context.fillRect(0, 0, 100, 100);
context.fillRect(0, 200, 100, 100);
context.fillStyle = 'rgba(0, 0, 255, 0.5)';
context.fillRect(0, 400, 100, 100);
context.fillRect(100, 300, 100, 100);
context.fillRect(200, 0, 100, 100);
*/

/*
    // DRAWING A HORIZONTAL LINE 
    context.beginPath();
    context.moveTo(50, 500);
    context.lineTo(400, 500);
    context.stroke();

    // DRAWING A VERTICAL LINE
    context.beginPath();
    context.moveTo(400, 0);
    context.lineTo(400, 500);
    context.stroke();
*/ 

/*
// OR WE CAN DRAW IT ALL TOGETHER 
context.beginPath();
context.moveTo(0, 500);
context.lineTo(400, 500);
context.lineTo(400, 0);
context.strokeStyle = '#000';
context.stroke();
*/

/*
    // NOW WE WANT TO DRAW SOME CIRCLES/ARCS
    context.fillStyle = 'black';
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI * 2, false);
    context.fill();
    context.closePath();
*/

// WE WANT TO DRAW MULTIPLE CIRCLES BUT WITH FOR LOOP 
/*
    // WE WANT TO RANDOMIZE COLORS
    var symbols, color; 
    symbols = "0123456789ABCDEF";
    color = "#";

    for (var i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    } 
*/
/*
for (var i = 0; i < 25; i++) {
    // WE WANT TO RANDOMIZE SOME COORDINATES
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var r = Math.random() * 100;

    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    // context.strokeStyle = color;
    context.stroke();
    // context.closePath();
}*/

/*
// MY FIRST ANIMATION
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    var radius = 50;
    function animate() {
        requestAnimationFrame(animate);
        context.clearRect(0, 0, innerWidth, innerHeight);

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2, false);
        context.strokeStyle = 'blue';
        context.stroke();

        if (x + radius + 1 > innerWidth || x - radius < 0 ) {
            dx = -dx;
        }
        if (y + radius + 1 > innerHeight || y - radius < 0) {
            dy = -dy;
        }
        x += dx;
        y += dy;
    }

    animate();
*/ 

// METHOD WHICH CREATES A CIRCLE AND UPDATES IT'T MOVEMENT 
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
        // context.fillStyle = 'red';
        context.strokeStyle = 'yellow';
        context.stroke();
        context.fill();
    }
    // FUNCTION WITH LOGIC FOR MOVEMENT OF THE CIRCLES
    this.update = function() {
        if (this.x + this.radius + 1 > innerWidth || this.x - this.radius < 0 ) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius + 1 > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    
        this.draw();
    }
}


// FUNCTION WHICH ANIMATES THE CIRCLE MOVEMENT
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    // FOR LOOP WHERE WE WILL DRAW ALL CIRCLES IN THE ARRAY 
    for (var i = 0; i < arrayOfCircles.length; i++) {
        arrayOfCircles[i].update();
    }
}

/* 
    // CREATE CIRCLE OBJECT 
    var circle = new Circle(200, 200, 3, 3, 30); 
*/

// CREATE AN ARRAY WHERE WE WILL STORE CIRCLES 
var arrayOfCircles = [];
// CREATE FOR-LOOP WHERE WE WILL CREATE AND STORE ALL CIRCLES INTO "arrrayOfCircles"
for (var i = 0; i < 200; i++) {
    // VARIABLE DECLARATION
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2)+ radius;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    arrayOfCircles.push(new Circle(x, y, dx, dy, radius));
}
// CHECK IF OUR ARRAY IS GOOD 
console.log(arrayOfCircles);
    

// CALL FOR ANIMATION FUNCTION
animate();

console.log(canvas);