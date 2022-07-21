function validation() {

	var name = document.getElementById("input-name").value;

	var nameAlert = document.getElementById("name-alert");

	if (!(/^[A-Za-z\s]+$/.test(name)) || name.length==0) {

	  	nameAlert.style.display = "block";
	  	nameAlert.style.color = "#fff";
	  	nameAlert.style.fontSize = "1.5em";
	  	nameAlert.innerHTML = "Please fill the field with only latin latters!";
	  	nameFlag = false;
	}
	else {
		nameAlert.style.display = "none";
		nameFlag = true;
	}
}