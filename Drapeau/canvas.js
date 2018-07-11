// Le drapeau de la Grande Bretagne

//fond blue
var c = document.getElementById('mon_canvas_01');
var ctx = c.getContext("2d");

//Fond blue
ctx.fillStyle = "#012169";
ctx.fillRect (0,0,600,300);

//croix blanche derriere
ctx.beginPath();
ctx.fillStyle = "white";
ctx.lineTo(60,0);
ctx.lineTo(600,270);
ctx.lineTo(600,300);
ctx.lineTo(540,300);
ctx.lineTo(0,30);
ctx.lineTo(0,0);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(540,0);
ctx.lineTo(600,0);
ctx.lineTo(600,30);
ctx.lineTo(60,300);
ctx.lineTo(0,300);
ctx.lineTo(0,270);
ctx.lineTo(540,0);
ctx.fill();
ctx.closePath();

//croix rouge derriere
ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.lineTo(300,150);
ctx.lineTo(260,150);
ctx.lineTo(0,20);
ctx.lineTo(0,0);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.moveTo(300,150);
ctx.moveTo(340,150);
ctx.lineTo(600,280);
ctx.lineTo(600,300);
ctx.lineTo(300,150);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.moveTo(300,150);
ctx.lineTo(600,0);
ctx.lineTo(560,0);
ctx.lineTo(300,130);
ctx.lineTo(300,150);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#C8102E";
ctx.moveTo(300,150);
ctx.lineTo(0,300);
ctx.lineTo(40,300);
ctx.lineTo(300,170);
ctx.lineTo(300,150);
ctx.fill();
ctx.closePath();

//Grosse croix blanche

ctx.fillStyle = "white";
ctx.fillRect (0,100,600,100);

ctx.fillStyle = "white";
ctx.fillRect (250,0,100,300);

//Grosse croix rouge

ctx.fillStyle = "#C8102E";
ctx.fillRect (0,120,600,60);

ctx.fillStyle = "#C8102E";
ctx.fillRect (270,0,60,300);
