var angle = 0
//var slider;

function setup(){
	createCanvas(1600,1600);
	//slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw(){
	background(51);
	//angle = slider.value();
	stroke(255);
	translate(200,height);
	branch(400);
	angle += 0.01;
	if(angle > TWO_PI){
		angle = 0;
	}
}

function branch(len){
	line(0, 0, 0, -len);
	translate(0,-len);	
	if(len > 4){
		push();
		rotate(angle);
		branch(len*0.67);
		pop();
		push();
		rotate(-angle);
		branch(len*0.67);
		pop();
	}
}
