const canvas = document.getElementById("canva");

const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(250, 250, 100, 0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(220, 200, 20, 0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(290, 200, 20, 0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(255, 260, 50, 0, Math.PI, false);
ctx.fill();