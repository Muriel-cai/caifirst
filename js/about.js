var box=document.querySelector('.pic'),
	 pic=document.querySelectorAll(".pic img"),
	 leftbun=document.querySelector(".leftbun"),
	 rightbun=document.querySelector(".rightbun");
	 console.log(pic)
var a=0,
	piclen=pic.length-1;
	pic[a].classList.add("opacity");
function play(){
	_a=a;
	a<piclen ? a++ : a=0;
	pic[_a].classList.remove("opacity");
	pic[a].classList.add("opacity");
	console.log(a,_a);
};
var time=setInterval(play,2000);
box.onmouseover=function(){
	clearInterval(time);
	leftbun.style.display="block";
	rightbun.style.display="block";
}
box.onmouseout=function(){
	time=setInterval(play,2000);
	leftbun.style.display="none";
	rightbun.style.display="none";
}
leftbun.onclick=function(){
	_a=a;
	a>0 ? a-- : a=piclen;
	pic[_a].classList.remove("opacity");
	pic[a].classList.add("opacity");
}
rightbun.onclick=function(){
	play();
};

