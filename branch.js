function Branch(begin, end){
	this.begin = begin;
	this.end = end;

	this.show = function(){
		stroke(255);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}

	this.branch = function(){
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(PI/4);
		var newEnd = p5.Vector.add(this.end, dir);

		var right = new Branch(this.end, newEnd);
	}

}
