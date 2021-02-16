console.log("Hello from index.js");

const canvas = document.getElementById("canvas");

const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

context.fillStyle = 'lightblue';
context.fillRect(0, 0, canvas.width, canvas.height);
context.fill();

