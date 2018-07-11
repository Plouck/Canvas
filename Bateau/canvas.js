// Le drapeau de la Grande Bretagne

//fond blue
var c = document.getElementById('mon_canvas_01');
var ctx = c.getContext("2d");

//Fumée noir
ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(230, 40, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(270 , 60, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(300,90,20, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

//Cheminé du bateau

ctx.beginPath();
ctx.fillStyle="black";
ctx.moveTo(280,120);
ctx.lineTo(320,120);
ctx.lineTo(330,180);
ctx.lineTo(270,180);
ctx.lineTo(280,120);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=10;
ctx.lineCap="round";
ctx.moveTo(200,180);
ctx.lineTo(400,180);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=10;
ctx.lineCap="square";
ctx.moveTo(200,185);
ctx.lineTo(400,185);
ctx.stroke();
ctx.closePath();

//Haut du bateau

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=10;
ctx.lineCap="round";
ctx.moveTo(150,200);
ctx.lineTo(450,200);
ctx.stroke();
ctx.closePath();

ctx.fillStyle = "black";
ctx.fillRect (145,200,310,100);

//separation du haut et bas du bateau

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth=10;
ctx.lineJoin="miter";
ctx.lineCap="square";
ctx.moveTo(150,300);
ctx.lineTo(300,250);
ctx.lineTo(450,300);
ctx.stroke();
ctx.closePath();

// bas du bateau

ctx.beginPath();
ctx.fillStyle="black";
ctx.moveTo(100,320);
ctx.lineTo(300,250);
ctx.lineTo(500,320);
ctx.lineTo(100,320);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="black";
ctx.moveTo(100,320);
ctx.lineTo(120,580);
ctx.bezierCurveTo(240,500,200,570,480,580);
ctx.lineTo(500,320);
ctx.lineTo(100,320);
ctx.fill();
ctx.closePath();
