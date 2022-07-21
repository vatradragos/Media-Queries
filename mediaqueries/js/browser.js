if (navigator.userAgent.indexOf("Chrome")!= -1) {
    document.getElementById("browser").innerHTML = "Google Chrome";
} else if (navigator.userAgent.indexOf("Firefox")!= -1) {
    document.getElementById("browser").innerHTML = "Mozzila Firefox";
} else if (navigator.userAgent.indexOf("MSIE")!= -1) {
    document.getElementById("browser").innerHTML = "Internet Explorer";
} else if (navigator.userAgent.indexOf("Edge")!= -1) {
    document.getElementById("browser").innerHTML = "MS Edge";
} else if (navigator.userAgent.indexOf("Safari")!= -1) {
    document.getElementById("browser").innerHTML = "Safari";
} else if (navigator.userAgent.indexOf("Opera")!= -1) {
    document.getElementById("browser").innerHTML = "Opera";
} else if (navigator.userAgent.indexOf("YaBrowser")!= -1) {
    document.getElementById("browser").innerHTML = "Yandex";
}