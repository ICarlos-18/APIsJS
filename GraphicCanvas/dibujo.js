const canvas = document.getElementById("canva");

const ctx = canvas.getContext("2d"); 

ctx.fillStyle = '#00ff00';
ctx.fillRect(75, 50, 50, 50);
ctx.strokeRect(75, 50, 50, 50);

ctx.fillStyle = '#000000';
ctx.fillRect(85, 60, 10, 10);
ctx.fillRect(105, 60, 10, 10);

ctx.fillStyle = '#ff0000';
ctx.fillRect(80, 80, 40, 10);

ctx.fillStyle = '#00ff00';
ctx.fillRect(75, 100, 50, 50);
ctx.strokeRect(75, 100, 50, 50);

ctx.fillStyle = '#00ff00';
ctx.fillRect(50, 100, 25, 50);
ctx.strokeRect(50, 100, 25, 50);
ctx.fillRect(125, 100, -25, 50);
ctx.strokeRect(125, 100, -25, 50);

ctx.fillStyle = '#00ff00';
ctx.fillRect(75, 150, -25, -50);
ctx.strokeRect(75, 150, -25, -50);
ctx.fillRect(100, 150, -25,-50);
ctx.strokeRect(100,150,-25,-50);