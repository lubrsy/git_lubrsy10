window.onload = function(){
	var box1 = document.getElementById("box1");
	document.onmousemove = function(event){
		// 兼容IE8以下
		event = event || window.event;
		var x = event.clientX;
		var y = event.clientY;
		var st = document.body.scrollTop || document.documentElement.scrollTop; 
		var sl = document.body.scrollLeft || document.documentElement.scrollLeft;
		box1.style.left = ( x + sl ) + "px";
		box1.style.top = ( y + st ) + "px";
	};
	var box2 = document.getElementById("box2");
	box2.onmousemove = function(event){
		event = event || window.event;
		event.cancelBubble = true;
	}
};