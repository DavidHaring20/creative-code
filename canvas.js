console.log("This is a proof of successful communication between Js and Html.");

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');
context.fillStyle = 'rgba(255, 0, 0, 0.5)';
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

// OR WE CAN DRAW IT ALL TOGETHER 
context.beginPath();
context.moveTo(0, 500);
context.lineTo(400, 500);
context.lineTo(400, 0);
context.strokeStyle = '#000';
context.stroke();

// NOW WE WANT TO DRAW SOME CIRCLES/ARCS
context.fillStyle = 'black';
context.beginPath();
context.arc(100, 100, 50, 0, Math.PI * 2, false);
context.fill();
context.closePath();

console.log(canvas);