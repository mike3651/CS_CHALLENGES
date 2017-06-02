/* Bubble test
 * Michael Wilson */
(function() {
	var bubbles = [];
	var screen_width = window.innerWidth;
	var screen_height = window.innerHeight;
	var yVel = 10;

	var canvas; 
	var ctx; 
	window.onload = function() {
		canvas = document.getElementById("screen");
		ctx = canvas.getContext("2d");
		$("#screen").css("height", screen_height + "px");
		$("#screen").css("width", screen_width + "px");		
		makeBubble();
		setInterval(animate, 100);
		setInterval(makeBubble, 50);
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for(var i = 0; i < bubbles.length; i++) {
			updateBubble(bubbles[i]);
			drawBubble(bubbles[i]);
			if(bubbles[i].y < 0) {
				bubbles.splice(i, 1);
			}
		}		
	}

	// function that draws a bubble
	function drawBubble(bubble) {				
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = "blue";
		ctx.arc(bubble.x, bubble.y, bubble.r, 0, 2 * Math.PI);
		ctx.stroke();
	}

	// function that updates the location/size of the bubble
	function updateBubble(bubble) {
		bubble.y -= yVel;
		bubble.x += (Math.random()* 16) - 8;		
		bubble.r *= (Math.random() * 2 + 1)/2;
		if(bubble.r > 4) {
			bubble.r -= Math.random();
		}
	}

	function makeBubble() {
		var bubble = {
			y: screen_height,
			x: Math.random() * screen_width/2,
			r: 2
		}
		bubbles.push(bubble);
		drawBubble(bubble);
	}
})();