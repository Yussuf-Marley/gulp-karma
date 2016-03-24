  // **
  // * Cytonn Technologies
  // *
  // * @author: Joseph Mahugu <jmahugu@cytonn.com>
  // *
  // * Project: Prototype in JS
  // **

	//prototype syntax: {objectName}.prototype.{methodName}
	var x =function(j){
		this.i = 0;
		this.j = j;
	}

	x.prototype.getj = function(){
		 return this.j; 
	}
	//this objects are children of x, thus contain function get j 
	var x1 = new x(1);
	var x2 = new x(2);

	document.getElementById("demo1").innerHTML = x1.getj();
	document.getElementById("demo2").innerHTML = x2.getj();
