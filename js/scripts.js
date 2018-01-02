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



var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
