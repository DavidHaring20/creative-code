const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

console.log("Hello from index.js");

window.addEventListener("load", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    console.log("Loaded.");
});

window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    console.log("Resized.");
});