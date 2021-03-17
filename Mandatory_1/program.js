// Set up the Canvas
const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.80;

// Constants
const backgroundColor = 'rgb(69, 61, 66)';
const particleColor = 'rgb(235, 16, 153)';
const particleWidth = 5;

// Background
context.beginPath()
context.fillStyle = backgroundColor;
context.rect(0,0,canvas.width, canvas.height);
context.stroke();
context.fill();

// Modules 
let Engine = Matter.Engine;
let Bodies = Matter.Bodies;
let Render = Matter.Render;
let World = Matter.World;

// Create an Engine
let engine = Engine.create();

// Create a Render 
let render = Render.create({
    element: document.body.canvas,
    engine: engine
});