// Le drapeau de la Grande Bretagne

//fond blue
var c = document.getElementById('mon_canvas_01');
var ctx = c.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.lineWidth=10;
ctx.moveTo(100,300);
ctx.lineTo(200,300);
ctx.lineTo(200,280);
ctx.lineTo(190,280);
ctx.lineTo(300,200);

//drapeau
ctx.lineTo(300,100);
ctx.lineTo(400,100);
ctx.lineTo(400,150);
ctx.lineTo(300,150);
ctx.lineTo(300,200);

//Contour
ctx.lineTo(410,280);
ctx.lineTo(400,280);
ctx.lineTo(400,300);
ctx.lineTo(500,300);
ctx.lineTo(490,310);
ctx.lineTo(490,440);
ctx.lineTo(500,450);
ctx.lineTo(100,450);
ctx.lineTo(110,440);
ctx.lineTo(110,310);
ctx.lineTo(100,300);
ctx.lineTo(200,300);
ctx.lineTo(200,280);

//Detail
ctx.lineTo(400,280);
ctx.lineTo(400,450);
ctx.lineTo(200,450);
ctx.lineTo(200,295);
ctx.lineTo(400,295);
ctx.lineTo(350,295);
ctx.lineTo(350,450);
ctx.lineTo(250,450);
ctx.lineTo(250,295);
ctx.lineTo(250,450);
ctx.lineTo(275,450);
ctx.lineTo(275,400);
ctx.quadraticCurveTo(300,380,325,400);
ctx.lineTo(325,450);



ctx.stroke();
ctx.closePath();
