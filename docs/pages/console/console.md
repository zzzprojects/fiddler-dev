---
layout: post
permalink: console
---

<!--<iframe width="100%" height="655" src="https://dotnetfiddle.net/Widget/CsMvc" frameborder="0"></iframe>!-->

<!--<script src="https://gist.github.com/JonathanMagnan/28d5c09a2d55f93df351555c5f564682.js"></script>!-->
<script src="https://gist.github.com/JonathanMagnan/a9e5098422e1616b9f74b3d650ad9bb5.js"></script>
<div class="console" style="display:none;">
	<iframe id="fiddle-console" src="https://zzzprojects.github.io/fiddler-dev/console-iframe" style="height: 100%; width: 100%; border:0;"></iframe>
</div>
<style>
.btn-run-outer {
		float:right;
}
.btn-run {
	padding-left:10px;
	padding-right:10px;
	margin-left:10px;
	border: 1px solid #666;
	border-radius: 3px;
	background: -webkit-radial-gradient(circle, #333, #111);
	background: -o-radial-gradient(circle, #333, #111);
	background: -moz-radial-gradient(circle, #333, #111);
	background: radial-gradient(circle, #333, #111);
	text-shadow: 2px -1px rgba(0, 0, 0, 0.7);
	font-size: 13px;
	color: #fff;
	position: relative;
	padding: .5em 1em;
}
a.btn-run {
	color: #fff !important;
	text-shadow: 2px -1px rgba(0, 0, 0, 0.7);
}	
<!--
	padding-top: 10px;
	padding-bottom: 10px;
	position: relative;
	line-height: 17px;
	font-size: 16px;
	top: -10px;!-->
</style>
<script>
fiddleId = "";

var gistList = document.getElementsByClassName("gist")[0];
var gistFiles = gistList.getElementsByClassName("gist-file");
for(var i = 0, iLen = gistFiles.length; i < iLen; i++) {
	var gist = gistFiles[i];
	var gistMeta = gist.getElementsByClassName("gist-meta")[0];
	var viewRaw = gistMeta.getElementsByTagName("A")[0];
	var url = viewRaw.href;
	var div = document.createElement("div");
	div.className = "btn-run-outer";
	var a = document.createElement('a');
	div.appendChild(a);
	var linkText = document.createTextNode("Run It!");
	a.appendChild(linkText);
	a.title = "run fiddle";
	a.href = "#";
	var gistId = gistList.getAttribute('id');
	a.onclick = function() { show_console(gistId); };
	a.className = "btn-run";
	gistMeta.insertBefore(div, viewRaw);
}

function show_console(id) {
	fiddleId = id;
	var console = document.getElementsByClassName("console")[0];
	console.style.display = "";
	
	var gistList = document.getElementById(id);
	var gistFiles = gistList.getElementsByClassName("gist-file");
	var data = [];
	
    for(var i = 0, iLen = gistFiles.length; i < iLen; i++) {
		var gist = gistFiles[i];
		var gistMeta = gist.getElementsByClassName("gist-data")[0];
		var innerText = gistMeta.innerText;
		data[i] = innerText;
	}
	
	addMessage(data);
}

function hide_console() {
	var console = document.getElementsByClassName("console")[0];
	console.style.display = "none";
}
function addMessage(msg) {
	var console = document.getElementById("fiddle-console").contentWindow;
	console.postMessage(msg,'*');
}



if (window.addEventListener) {
	// For standards-compliant web browsers
	window.addEventListener("message", receiveMessage, false);
}
else {
	window.attachEvent("onmessage", receiveMessage);
}

function receiveMessage(event)
{
	if(event.data == "fiddle-close") {
		hide_console();
	}
/*
  if (event.origin !== "http://example.org:8080")
    return;*/

  // ...
}
</script>



<style>
.console {
	background: #333;
	background: -webkit-radial-gradient(circle, #333, #111);
	background: -o-radial-gradient(circle, #333, #111);
	background: -moz-radial-gradient(circle, #333, #111);
	background: radial-gradient(circle, #333, #111);
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 100%;
	height: 400px;
	width: 100%;
}
</style>