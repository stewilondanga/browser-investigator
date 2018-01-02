var platform = navigator.platform;
var useragent = navigator.userAgent;
var version = navigator.appVersion;
var online = navigator.onLine;
var cookies = navigator.cookieEnabled;
var java = navigator.javaEnabled();
var language = navigator.language;

if (navigator.geolocation != "") {
  navigator.geolocation.getCurrentPosition(showDetails);
}

document.getElementById("platform").innerHTML = platform;
document.getElementById("useragent").innerHTML = useragent;
document.getElementById("version").innerHTML = version.split(" ")[0];
document.getElementById("online").innerHTML = online;
document.getElementById("cookies").innerHTML = cookies;
document.getElementById("java").innerHTML = java;
document.getElementById("language").innerHTML = language;

function showDetails(position) {
    var lat = Math.floor(position.coords.latitude);
    var long = Math.floor(position.coords.longitude);

		document.getElementById("location-lat").innerHTML = lat;

		 

var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
