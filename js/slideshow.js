console.log(list);

current = "shot1";

document.getElementById("shot1").style.opacity = "1";
document.getElementById("shot2").style.opacity = "0";

function other(s)
{
    if(s == "shot1")
    {
        return "shot2";
    }
    else
    {
        return "shot1";
    }
}

function step(x)
{
	document.getElementById('name').innerHTML = x;
	document.getElementById('shot1').style.height = (90-(x-1)*10)+"%";
}

function gift()
{
	var dir = "img/";
	var rand = list[Math.floor(Math.random() * (list.length-1))+1];
	var img_ele = document.getElementById("shot2");
	var name_ele = document.getElementById("name");
    name_ele.innerHTML = rand.split(".")[0];
	img_ele.setAttribute("src", dir+rand);
    deg = Math.floor(Math.random() * 40) - 20;
    img_ele.style.transform = "rotate("+deg+"deg)";
    /*while(!loaded){console.log(loaded);}
    loaded = false;*/
    img_ele.style.opacity = "1";
    img_ele.style.zIndex = "10";
	console.log(img_ele.getAttribute("src"));
	var img_ele = document.getElementById("shot1");
    img_ele.style.height = "100%";
    img_ele.style.opacity = "0";
    img_ele.style.zIndex = "0";
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
		  window.webkitRequestAnimationFrame || 
		  window.mozRequestAnimationFrame    || 
		  window.oRequestAnimationFrame      || 
		  window.msRequestAnimationFrame     || 
		  function( callback ){
			window.setTimeout(callback, 1000 / 60);
		  };
})();

var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
	W = window.innerWidth,
	H = window.innerHeight,
	circles = [];

canvas.width = W;
canvas.height = H; 

//Random Circles creator
function create() {
	
	//Place the circles at the center
	
	this.x = W/2;
	this.y = H/2;

	
	//Random radius between 2 and 6
	this.radius = 2 + Math.random()*3; 
	
	//Random velocities
	this.vx = -5 + Math.random()*10;
	this.vy = -5 + Math.random()*10;
	
	//Random colors
	this.r = 255;
	v = 255-Math.round(Math.random())*255
	this.g = v;
	this.b = v;
}

for (var i = 0; i < 500; i++) {
	circles.push(new create());
}

function draw() {
	
	//Fill canvas with black color
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.0)";
    ctx.fillRect(0, 0, W, H);
	
	//Fill the canvas with circles
	for(var j = 0; j < circles.length; j++){
		var c = circles[j];
		
		//Create the circles
		ctx.beginPath();
		ctx.arc(c.x, c.y, c.radius, 0, Math.PI*2, false);
        ctx.fillStyle = "rgba("+c.r+", "+c.g+", "+c.b+", 0.5)";
		ctx.fill();
		
		c.x += c.vx;
		c.y += c.vy;
		c.radius -= .03;
		
		if(c.radius < 0){}
			// circles[j] = new create();
	}
}

function animate() {
	requestAnimFrame(animate);
	draw();
}

setTimeout("step(5);",1000);
setTimeout("step(4);",2000);
setTimeout("step(3);",3000);
setTimeout("step(2);",4000);
setTimeout("step(1);",5000);
setTimeout("gift();",6000);
setTimeout("animate();",5990);