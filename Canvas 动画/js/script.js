var CANVAS_WIDTH = 1024;
var CANVAS_HEIGHT = 500;
var START_TOP = 100;
var START_LEFT = 500;
var RADIUS = 8;

window.onload = function () {
	var Public_curTime = new Date(),
		canvas = document.getElementById("myCanvas"),
		context = canvas.getContext('2d');

	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;

	setInterval(function () {
		render(context);
		// update();
	},50);

	function render(ctx) {
		var curtime = Public_curTime;
		var curHours = curtime.getHours(),
			curMins	 = curtime.getMinutes(),
			curSecs  = curtime.getSeconds();

		renderDigit(START_LEFT,START_TOP,Math.floor(curHours/10),ctx);

	}

	function renderDigit(x,y,num,ctx) {
		var arr = digit[num];
		for(var i = 0; i < arr.length ; i++) {
			for(var j=0 ; j < arr[i].length ; j++){
				if (arr[i][j] === 1) {
					ctx.beginPath();
					ctx.arc( x+j*2*(RADIUS+1)+(RADIUS+1) , y+i*2*(RADIUS+1)+(RADIUS+1) , RADIUS , 0 , 2*Math.PI )
					ctx.closePath();

					ctx.()

				}
			}
		}
		
		
	}
};