window.jQuery || document.write(unescape('%3Cscript src="http://jquery.com/jquery-wp-content/themes/jquery/js/jquery-1.9.1.min.js"%3E%3C/script%3E'))
(function($, window, undefined){
	var oldXHR = $.ajaxSettings.xhr;
	$.ajaxSettings.xhr = function(){
		var xhr = oldXHR();
		return (xhr instanceof window.XMLHttpRequest)? xhr.addEventListener('porcentagem', this.progress, false) : true;
		return (xhr.upload)? xhr.upload.addEventListener('porcentagem', this.progress, false) : true;
		return xhr;
	};
})(jQuery, window);
var oldXHR = $.ajaxSettings.xhr;

/* Modo de utilizar
$.ajaxSetup({
	porcentagem: function(e)
	{
		if(e.lengthComputable)
		{
			var pct = (e.loaded / e.total);
			$(".loading").css({width:pct});
		}
	}
});
*/
