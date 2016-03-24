  // **
  // *
  // * Cytonn Technologies
  // *
  // * @author: Joseph Mahugu <jmahugu@cytonn.com>
  // *
  // * Project: Closure in JS
  // *
  // **

  function showName(firstName, lastName){
  	var nemesis = "My full name is ";

  	//this function will have access to outer functions' variables including the parameters
  	function fullName(){
  	return nemesis + firstName + " " + lastName;
  	}
    return fullName();
}
  //Calling this function will display, My full name is Joseph Marley.
  document.getElementById("try").innerHTML = showName("Joseph", "Marley");
