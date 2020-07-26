function getBrowserInfo() {
  var q = "";
var w = "";
var e = "";

q = " Propriedade appName: " +navigator.appName;
document.getElementById("name").innerHTML = q;
w = " Propriedade appCodeName: " +navigator.appCodeName;
document.getElementById("codename").innerHTML = w;

e = " Propriedade userAgent: " +navigator.userAgent;
document.getElementById("info").innerHTML = e;

var navegadores = "";
var chrome ="";
var safari ="";
var opera ="";
var epiphany="";

if (navegadores = navigator.userAgent.toLowerCase().indexOf('op') > -1) {
    document.getElementById("browser").innerHTML = "Opera";
}else if (navegadores = navigator.userAgent.indexOf('MSIE') > -1) {
    document.getElementById("browser").innerHTML = "Internet Explorer ou Edge";
}else if (navegadores = navigator.userAgent.indexOf('Firefox') > -1) {
    document.getElementById("browser").innerHTML = "Mozilla Firefox";
}else if (navegadores = navigator.userAgent.indexOf('Epiphany') > -1) {
    document.getElementById("browser").innerHTML = "Epiphany";
}else if (navegadores = navigator.userAgent.indexOf('Chrome') > -1) {
    document.getElementById("browser").innerHTML = "Google Chrome";
}else if (navegadores = navigator.userAgent.indexOf('Safari') > -1) {
    document.getElementById("browser").innerHTML = "Safari";
}

if ((chrome) && (safari)) safari = false;
if ((chrome) && (opera)) chrome = false;
if ((safari) && (epiphany)) safari = false; 

}

export default getBrowserInfo;