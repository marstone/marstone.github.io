(function(){

	var log = function(message) {
		if(typeof console != "undefined") console.log(message);
	};

	var maps = {
		"infoplus": "http://form.dev.sjtu.edu.cn",
		"canvas":	"http;//my.dev.sjtu.edu.cn"
	};

	var hash = window.location.hash;
	if(null != hash && hash.length > 0) {
		
		var index = hash.indexOf("/");
		var key = hash.substring(1), path = "";
		if(index > 0) {
			key = hash.substring(1, index);
			path = hash.substring(index);
		}

		var loc = maps[key];
		if(null != loc) {
			loc += path;
			if(null != console) {
				log(loc);
				window.location.href = loc;	
			}
		}
	}

})();
