
function select(event) {
	let iduriButoane = ["arabic", "hebrew", "hindu", "georgian", "armenian", "thai"];
	let idElemSelectat = event.srcElement.id;

	iduriButoane.splice(iduriButoane.indexOf(idElemSelectat),1);

	document.getElementById(idElemSelectat).style.backgroundColor = "black";
	document.getElementById(idElemSelectat).style.color = "#ebe6d8";

	iduriButoane.forEach(element => {
	document.getElementById(element).style.backgroundColor = "#ebe6d8";
	document.getElementById(element).style.color = "black";
	 }
	)

	var latin = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
				 "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var arabic = [" ", "&#1571;", "&#1576;", "&#1582;", "&#1583;", "&#1610;", "&#1601;", "&#1594;", "&#1607;", "&#1611;", "&#1580;",
 					"&#1603;", "&#1604;", "&#1605;", "&#1606;", "&#1613;", "&#1577;", "&#1602;", "&#1585;", "&#1588;", "&#1591;",
 					 "&#1617;", "&#1608;", "&#1572;", "&#1620;", "&#1610;", "&#1592;"];

	var hebrew = [" ", "&#1488;", "&#1489;", "&#1499;", "&#1491;", "&#1492;", "&#1522;", "&#1490;", "&#1495;", "&#1497;", "&#1509;",
 				"&#1498;", "&#1500;", "&#1502;", "&#1504;", "&#1511;", "&#1508;", "&#1511;", "&#1512;", "&#1513;", "&#1514;",
 				 "&#1503;", "&#1493;", "&#1520;", "&#1522;", "&#1497;", "&#1494;"];


	var hindu = [" ", "&#2309;", "&#2348;", "&#2330;", "&#2337;", "&#2317;", "&#2347;", "&#2327;", "&#2361;", "&#2311;", "&#2332;", 
				"&#2325;", "&#2354;", "&#2350;", "&#2344;", "&#2321;", "&#2346;", "&#2324;", "&#2352;", "&#2360;", "&#2340;",
				 "&#2313;", "&#2357;", "&#2314;", "&#2401;", "&#2400;", "&#2343;"];


	var georgian = [" ", "&#4256;", "&#4257;", "&#4265;", "&#4259;", "&#4260;", "&#4276;", "&#4258;", "&#4288;", "&#4264;", "&#4283;", 
				"&#4265;", "&#4266;", "&#4267;", "&#4268;", "&#4269;", "&#4270;", "&#4279;", "&#4272;", "&#4273;", "&#4274;",
				 "&#4275;", "&#4291;", "&#4293;", "&#4286;", "&#4292;", "&#4271;"];


	var armenian = [" ", "&#1329;", "&#1330;", "&#1342;", "&#1332;", "&#1333;", "&#1366;", "&#1331;", "&#1333;", "&#1339;", "&#1345;",
 				"&#1343;", "&#1340;", "&#1348;", "&#1350;", "&#1365;", "&#1354;", "&#1363;", "&#1356;", "&#1351;", "&#1359;",
 				 "&#1364;", "&#1352;", "&#1341;", "&#1341;", "&#1349;", "&#1334;"];


	var thai = [" ", "&#3632;", "&#3610;", "&#3592;", "&#3604;", "&#3648;", "&#3613;", "&#3591;", "&#3633;", "&#3636;", "&#3637;",
	 			"&#3585;", "&#3621;", "&#3617;", "&#3609;", "&#3650;", "&#3599;", "&#3630;", "&#3620;", "&#3624;", "&#3600;",
	 			 "&#3640;", "&#3623;", "&#3628;", "&#3601;", "&#3618;", "&#3588;"];


	var initial_text = document.getElementById("input-name").value.toLowerCase();

	var final_text = "";

	for (var i = 0; i < initial_text.length; i++) {
		var litera_curenta = initial_text[i];
		var pozitie_litera = -1;
		for (var j = 0; j < latin.length; j++) {
			if (litera_curenta == latin[j]) {
				pozitie_litera = j;
			}
		}

		if (idElemSelectat == "arabic") {
			var litera_curenta_arabic = arabic[pozitie_litera];
			final_text += litera_curenta_arabic;
		}
		else if (idElemSelectat == "hebrew") {
			var litera_curenta_hebrew = hebrew[pozitie_litera];
			final_text += litera_curenta_hebrew;
		} 
		else if (idElemSelectat == "hindu") {
			var litera_curenta_hindu = hindu[pozitie_litera];
			final_text += litera_curenta_hindu;
		} 
		else if (idElemSelectat == "georgian") {
			var litera_curenta_georgian = georgian[pozitie_litera];
			final_text += litera_curenta_georgian;
		}
		else if (idElemSelectat == "armenian") {
			var litera_curenta_armenian = armenian[pozitie_litera];
			final_text += litera_curenta_armenian;
		}
		else if (idElemSelectat == "thai") {
			var litera_curenta_thai = thai[pozitie_litera];
			final_text += litera_curenta_thai;
		}
	}
	document.getElementById("convert").innerHTML = final_text;
}