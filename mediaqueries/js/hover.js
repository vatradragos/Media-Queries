function hover(event) {

    let iduriButoane = ["arabic", "hebrew", "hindu", "georgian", "armenian", "thai"];
	let idElemSelectat = event.srcElement.id;

	iduriButoane.splice(iduriButoane.indexOf(idElemSelectat),1);

    iduriButoane.forEach(element => {
        document.getElementById("arabic").innerHTML = "صحافة";
        document.getElementById("hebrew").innerHTML = "ללחוץ";
        document.getElementById("hindu").innerHTML = "दबाएँ";
        document.getElementById("georgian").innerHTML = "დაჭერა";
        document.getElementById("armenian").innerHTML = "մամուլ";
        document.getElementById("thai").innerHTML = "กด";
         }
        )

}

function out(event) {

    let iduriButoane = ["arabic", "hebrew", "hindu", "georgian", "armenian", "thai"];
	let idElemSelectat = event.srcElement.id;

	iduriButoane.splice(iduriButoane.indexOf(idElemSelectat),1);

    iduriButoane.forEach(element => {
        document.getElementById("arabic").innerHTML = "Arabic";
        document.getElementById("hebrew").innerHTML = "Hebrew";
        document.getElementById("hindu").innerHTML = "Hindu";
        document.getElementById("georgian").innerHTML = "Georgian";
        document.getElementById("armenian").innerHTML = "Armenian";
        document.getElementById("thai").innerHTML = "Thai";
         }
        )

}