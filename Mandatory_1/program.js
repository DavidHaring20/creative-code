// Constants 
const backgroundColor = 'rgb(69, 61, 66)';
const particleColor = 'rgb(235, 16, 153)';
const floorColor = 'rgba(255, 255, 255, 0.6)';
const particleWidth = 5;

const width = document.innerWidth;
const height = document.innerHeight;

console.log(width, height);

// Modules 
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const World = Matter.World;
const Composite = Matter.Composite;

// Create an Engine
const engine = Engine.create();

// Create a Render 
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1500,
        height: 700,
        wireframes: false,
        background: backgroundColor
    }
});

const floor = Bodies.rectangle(0, 650, 3000, 4, { 
    isStatic: true,
    render: {
        fillStyle: floorColor
    }
});


let box1 = Bodies.rectangle(400, 40, 150, 150);
let box2 = Bodies.rectangle(450, 630, 150, 150);
let box3 = Bodies.rectangle(220, 180, 150, 150);
let box4 = Bodies.rectangle(520, 110, 150, 150);
let box5 = Bodies.rectangle(370, 250, 150, 150);
let box6 = Bodies.rectangle(1000, 100, 150, 150);

// Add everything to the world
World.add(engine.world, [floor, box1, box2, box3, box4, box5, box6]);

// Run an Engine
Engine.run(engine)

// Run the Render
Render.run(render);