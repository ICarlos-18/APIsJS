const canvas = document.getElementById("canva");

const ctx = canvas.getContext("2d"); 
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

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

        // Dibujo de la calabaza
        ctx.beginPath();
        ctx.fillStyle = '#FFA500'; // naranja
        ctx.arc(centerX, centerY, 100, 0, 2 * Math.PI);
        ctx.fill();

        // Dibujo de los ojos triangulares
        ctx.beginPath();
        ctx.fillStyle = '#F41919'; // blanco
        ctx.moveTo(centerX + 39, centerY - 60);
        ctx.lineTo(centerX, centerY - 30);
        ctx.lineTo(centerX + 60, centerY -20);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(centerX - 65, centerY - 20);
        ctx.lineTo(centerX, centerY - 30);
        ctx.lineTo(centerX - 40, centerY - 60);
        ctx.closePath();
        ctx.fill();

        // Dibujo de la boca
        ctx.beginPath();
        ctx.fillStyle = '#000000'; // negro
        ctx.arc(centerX, centerY + 40, 40, 0, 3, Math.PI);
        ctx.arc(centerX, centerY + 70, 20, 0, 3, Math.PI);
        ctx.fill();
        
        ctx.beginPath();
        ctx.fillStyle = '#00ff00';
        ctx.fillRect(305, 45, 25, 70);
        ctx.strokeRect(305, 45, 25, 70);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = '#B9ACAC';
        ctx.arc(530, 60, 60, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = '#635A5A';
        ctx.arc(530, 60, 60, 7, 4, Math.PI, false);
        ctx.fill();