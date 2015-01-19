delay = 3000;
max_angle = 20;

console.log(list);

current = "shot1";

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

function nextImage()
{
	var dir = "img/";
	var rand = list[Math.floor(Math.random() * (list.length-1))+1];
	var img_ele = document.getElementById(current);
	var name_ele = document.getElementById("name");
    name_ele.innerHTML = rand.split(".")[0];
	img_ele.setAttribute("src", dir+rand);
    deg = Math.floor(Math.random() * (2*max_angle)) - max_angle;
    img_ele.style.transform = "rotate("+deg+"deg)";
    /*while(!loaded){console.log(loaded);}
    loaded = false;*/
    img_ele.style.opacity = "1";
    img_ele.style.zIndex = "10";
	console.log(img_ele.getAttribute("src"));
    current = other(current);
	var img_ele = document.getElementById(current);
    img_ele.style.opacity = "0";
    img_ele.style.zIndex = "0";
}

nextImage();
setInterval("nextImage();",delay);