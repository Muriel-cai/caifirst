
var box=document.querySelector(".main"),
	pic=document.querySelectorAll(".main img"),
	point=document.querySelectorAll(".point li"),
	leftbun=document.querySelector(".leftbun"),
	rightbun=document.querySelector(".rightbun"),
	a=0,
	piclen=pic.length;
	pic[0].style.display="block";
	point[0].style.background="#E97C73";
	console.log(pic[0]);
function play(){
	for(var i=0;i<piclen;i++){
		pic[i].style.display="none";
		point[i].style.background="#D8D8D8";
	}
	point[a].style.background="#E97C73"; 
	pic[a].style.display="block";
};
for(var i=0;i<piclen;i++){
	point[i].index=i;
	point[i].onmouseover=function(){
		a=this.index;
		play()
	}
};
function my(){
	a=(a+1)%piclen;
	play();
}
rightbun.onclick=my;
leftbun.onclick=function(){
	if(a==0){a=piclen};
	a=(a-1)%piclen;
	play();
}
var time=setInterval(my,2000);
	box.onmouseover=function(){
		clearInterval(time);
}
box.onmouseout=function(){
		time=setInterval(my,2000);

}

