	window.addEventListener("load",function(){setTimeout(scrollTo,0,0,1);},false);
	$(window).load(function(e){
		setTimeout(scrollTo,0,0,1);
	});
	window.addEventListener("orientationchange",function(ev) {
		ev.preventDefault();
		var orientation = window.orientation;
		log(orientation);
		switch(orientation) {
		case 0:				//세로보기
			alignLayout(416);
			break;
		case 90:
		case -90:			//가로보기
			alignLayout(270);
			break;
		}
	},false);
	var alignLayout=function(){
				
	}
	var log=function(text){
		$("#debug").html(text);
	}