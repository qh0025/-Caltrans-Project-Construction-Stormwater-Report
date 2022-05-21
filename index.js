document.getElementById("submitButton").onclick = function(){

	
	var project = new Object();
	project.projName = document.getElementById("projectName").value;
	console.log("hello",project.projName);

	project.contract = document.getElementById("contract").value;
	project.wdid = document.getElementById("wdid").value;
	project.district = document.getElementById("District").value;

	localStorage.setItem("projStor",JSON.stringify(project));

}