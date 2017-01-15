var tree = [];

function setup(){
	createCanvas(400,400);
	var a = createVector(width/2, height);
	var b = createVector(width/2, height-100);
	var root = new Branch(a, b);

	tree[0] = root;
}

function draw(){
	background(51);

	for(var i = 0; i < tree.length; i++){
		tree[i].show;
	}
}