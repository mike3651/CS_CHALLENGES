(function() {
	var magenta = "FF00FF", blue = "0000FF", red = "FF0000";
	var change = 1;
	var canvas, ctx, gradient;
	window.onload = function() {
		canvas = document.getElementById("canvas");
		ctx = canvas.getContext("2d");
		gradient = ctx.createLinearGradient(0, 0, 170, 0)
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		updateSquare();
		$("body").keydown(function(e) {
			if(e.keyCode = 65) {				
				updateColor(magenta, false, "m");
				updateColor(blue, false, "b");
				updateColor(red, false, "r");
				console.log(magenta);
				console.log(blue);
				console.log(red);
			} 
			if(e.keyCode = 70) {
				magenta = updateColor(magenta, true);
				blue = updateColor(blue, true);
				red = updateColor(red, true);				
			}
			updateSquare();
		});
		
	}

	function updateColor(color, truth, x) {		
		if(!truth) {
			color = (parseInt(color, 16) - change).toString(16);
		} else {
			color = (parseInt(color, 16) + change).toString(16);
		}				
		if(parseInt(color, 16) >= 16777215) {
			color = "000000";
		}
		while(color.length < 6) {
			color = "0" + color;
		}

		switch(x) {
			case "m":
				magenta = color;
			case "b":
				blue = color;
			case "r":
				red = color;
		}

		console.log(color);
		//return color;		
	} 

	function updateSquare() {
		gradient.addColorStop("0.0", "#" + magenta);
		gradient.addColorStop("0.5","#" +  blue);
		gradient.addColorStop("1.0", "#" + red);
		ctx.strokeStyle = gradient;
		ctx.lineWidth = 5;
		ctx.strokeRect(20, 20, 150, 100);
	}
})();