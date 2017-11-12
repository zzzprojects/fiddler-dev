function fiddle() {
}

fiddle.show = function(options) {
	fiddleId = "";

	var gistList = document.getElementsByClassName("gist");
	for(var gist_i = 0, gist_iLen = gistList.length; gist_i < gist_iLen; gist_i++) {
		var gist = gistList[gist_i];
		var gistId = gist.id;
		
		// ENSURE it's a gist
		if(gistId.startsWith('gist')) {
			
			// GET all files
			var gistFiles = gist.getElementsByClassName("gist-file");
			
			for(var gistFile_i = 0, gistFile_iLen = gistFiles.length; gistFile_i < gistFile_iLen; gistFile_i++) {
				var gistFile = gistFiles[gistFile_i];
				
				var gistFileMeta = gistFile.getElementsByClassName("gist-meta")[0];
				var viewRaw = gistFileMeta.getElementsByTagName("A")[0];
				var url = viewRaw.href;
				
				// GET gist type
				var isDotNet = false;
				var IsSql = false;
				var console = "";
				
				if(url.endsWith(".cs")) {
					isDotNet = true;
					console = "dotnetfiddle";
				}
				else if(url.endsWith(".schema") || url.endsWith(".sql")) {
					isSql = true;
					console = "sqlfiddle";
				}
				
				if(options.console == "dotnetfiddle" && !isDotNet) {
					continue;
				}
				if(options.console == "sqlfiddle" && !IsSql) {
					continue;
				}

				// CREATE button	
				{
					// CREATE
					var div_outer = document.createElement("div");
					var button = document.createElement('span');
					var linkText = document.createTextNode("Run It!");
					
					// ATTRIBUTES
					div_outer.className = "btn-fiddle-gist-run-outer";
					button.className = "btn-fiddle-gist-run";
					button.title = "run fiddle";				
					button.onclick = function() { 
						fiddle.showConsole({
							"id": gistId,
							"console": console,
							"options": options.console
						}); 
					};
					
					// APPEND
					div_outer.appendChild(button);					
					button.appendChild(linkText);
					gistFileMeta.insertBefore(div_outer, viewRaw);
				}
			}
		}		
	}	
}


////////////
// Fiddle Console
////////////
fiddle.getConsole = function () {
	var console = document.getElementsByClassName("fiddler-console")[0];
	return console;
}
fiddle.hideConsole = function () {
	var console = fiddle.getConsole();
	console.style.display = "none";
}

fiddle.showConsole = function (options) {
	fiddleId = options.id;
	var console = document.getElementsByClassName("fiddler-console")[0];
	
	url = "https://dotnetfiddle.net/widgetconsole?Languages=CSharp&projectType=Console&Compiler=Roslyn&CSharp_CodeBlock=";
	
	var gist = document.getElementById(fiddleId);
	
	// GET all files
	var gistFiles = gist.getElementsByClassName("gist-file");
	var data = [];
	
    for(var i = 0, iLen = gistFiles.length; i < iLen; i++) {
		var gist = gistFiles[i];
		var gistMeta = gist.getElementsByClassName("gist-data")[0];
		var innerText = gistMeta.innerText;
		data[i] = innerText;
	}
	
	var s = data;
	var encoded = encodeURI(s);
	
	url = url + encoded;
	
	if(console.getElementsByTagName("IFRAME")[0].src != url) {
		console.getElementsByTagName("IFRAME")[0].src = url;
	}
	
	console.style.display = "";

	fiddle.sendMessage(data);
}

fiddle.showConsoleEmbed = function (options) {
	fiddleId = options.id;
	var console = document.getElementsByClassName("fiddler-console")[0];
	
	url = "https://dotnetfiddle.net/WidgetConsole/";
	
	url = url + fiddleId;
	
	if(console.getElementsByTagName("IFRAME")[0].src != url) {
		console.getElementsByTagName("IFRAME")[0].src = url;
	}
	
	console.style.display = "";
}

fiddle.showConsoleHtml = function (options) {
	var console = document.getElementsByClassName("fiddler-console")[0];
	url = "https://dotnetfiddle.net/widgetconsole?Languages=CSharp&projectType=Console&Compiler=Roslyn&CSharp_CodeBlock=";
	var s = options.code;
	var encoded = encodeURI(s);
	
	url = url + encoded;
	
	if(console.getElementsByTagName("IFRAME")[0].src != url) {
		console.getElementsByTagName("IFRAME")[0].src = url;
	}
	
	console.style.display = "";

	fiddle.sendMessage(data);
}

////////////
// Fiddle Message
////////////
fiddle.sendMessage = function (msg) {
	var console = document.getElementById("fiddle-console").contentWindow;
	console.postMessage(msg,'*');
}
fiddle.receiveMessage = function(event) {
	if(event.data == "fiddle-close") {
		fiddle.hideConsole();
	}
	else if(event.data.startsWith("go-to-url;")) {
		var url = event.data.substring(10, 8000);
		location.href = url;
	}
}
if (window.addEventListener) {
	window.addEventListener("message", fiddle.receiveMessage, false);
}
else {
	window.attachEvent("onmessage", fiddle.receiveMessage);
}
////////////
// Fiddle ToCode
////////////
fiddle.toCode = function (element, options) {
	var text = element.innerText;
	
	// AJAX request!
	element.innerText = "[b]" + text + "[/b]";
}
fiddle.toCodeFiddle = function (fiddleId, options) {
	document.write("AJAX: " + fiddleId);
}
////////////
// Fiddle INIT
////////////

function sqlfiddle() {
}
sqlfiddle.show = function(selectors, options) {
	if(selectors == undefined) {
		sqlfiddle.show(".gist");
		return;
	}

	fiddle.show({"console": "sqlfiddle"});
}

function dotnetfiddle() {
}
dotnetfiddle.show = function(selectors, options) {
	if(selectors == undefined) {
		dotnetfiddle.show(".gist");
		return;
	}
	else if(selectors == ".gist") {
		fiddle.show({"console": "dotnetfiddle"});
	}
	else if (selectors.startsWith("dotnetfiddle_")) {
		fiddle_id = selectors.substr(13, 8000);
		fiddle.showConsoleEmbed({ "id": fiddle_id });
	}
	else if (selectors.startsWith(".")) {
		var selectors = selectors.substr(1, 8000);
		var elements = document.getElementsByClassName(selectors);
		for(var i = 0, iLen = elements.length; i < iLen; i++) {
			var element = elements[i];
			fiddle.toCode(element, {"console": "dotnetfiddle"});
		}
	}
}
dotnetfiddle.show2 = function(options) {
	fiddle.showConsoleHtml(options);
}

document.write('\
<div class="fiddler-console" style="display: none;">\
	<iframe id="fiddle-console" style="height: 100%; width: 100%; border:0;"></iframe>\
</div>\
');
////////////
// CSS
////////////
document.write("\
<style>\
.fiddler-console {\
	background: #333;\
	background: -webkit-radial-gradient(circle, #333, #111);\
	background: -o-radial-gradient(circle, #333, #111);\
	background: -moz-radial-gradient(circle, #333, #111);\
	background: radial-gradient(circle, #333, #111);\
	height: 400px;\
	width: 100%;\
	position: fixed;\
	bottom: 0;\
	left: 0;\
	z-index: 1000;\
}\
.btn-fiddle-gist-run-outer {\
	float:right;\
}\
.btn-fiddle-gist-run {\
	background: #333;\
	background: -webkit-radial-gradient(circle, #333, #111);\
	background: -o-radial-gradient(circle, #333, #111);\
	background: -moz-radial-gradient(circle, #333, #111);\
	background: radial-gradient(circle, #333, #111);\
	border: 1px solid #666;\
	border-radius: 3px;\
	cursor: pointer;\
	color: #fff;\
	font-size: 13px;\
	font-weight: 600;\
	text-shadow: 2px -1px rgba(0, 0, 0, 0.7);\
	position: relative;\
	margin-left:10px;\
	padding: .5em 1em;\
}\
</style>\
");