// Stickman fight

//fond blue
var c = document.getElementById('mon_canvas_01');
var ctx = c.getContext("2d");


//tete du bonhomme noir
ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(100, 70, 60, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

//corps du BN

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=35;
ctx.lineCap="round";
ctx.moveTo(100,130);
ctx.lineTo(90,250);
ctx.lineTo(145,320);
ctx.stroke();
ctx.closePath();

//bras du BN

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=35;
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.moveTo(100,130);
ctx.lineTo(35,200);
ctx.lineTo(125,190);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=35;
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.moveTo(100,130);
ctx.lineTo(160,160);
ctx.lineTo(230,60);
ctx.stroke();
ctx.closePath();

// 1 jambe du BN

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=35;
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.moveTo(145,320);
ctx.lineTo(140,400);
ctx.lineTo(145,480);
ctx.stroke();
ctx.closePath();





//tete du bonhomme rouge
ctx.beginPath();
ctx.fillStyle="red";
ctx.arc(320, 180, 60, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

//corps du BR

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=35;
ctx.lineCap="round";
ctx.moveTo(315,190);
ctx.lineTo(420,250);
ctx.lineTo(410,340);
ctx.stroke();
ctx.closePath();

//bras du BR

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=35;
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.moveTo(360,220);
ctx.lineTo(300,260);
ctx.lineTo(250,220);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=35;
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.moveTo(360,220);
ctx.lineTo(190,260);
ctx.stroke();
ctx.closePath();

//2eme jambe du BN

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=35;
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.moveTo(145,320);
ctx.lineTo(250,280);
ctx.lineTo(365,270);
ctx.stroke();
ctx.closePath();

//jambe du BR

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=35;
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.moveTo(410,340);
ctx.lineTo(310,290);
ctx.lineTo(200,350);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=35;
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.moveTo(410,340);
ctx.lineTo(390,440);
ctx.lineTo(390,520);
ctx.stroke();
ctx.closePath();
