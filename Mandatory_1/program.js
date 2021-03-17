const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

// Modules 
let Engine = Matter.Engine;
let Bodies = Matter.Bodies;
let Render = Matter.Render;
let World = Matter.World;

// Create an Engine
let engine = Engine.create();

// Create a Render 
let render = Render.create({
    element: document.body,
    engine: engine
});

let background