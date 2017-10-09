---
layout: post
permalink: console-iframe
---

<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
 </head>
  <body>
	
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-6 wow slideInDown">

				<!-- nav-tabs -->
				<div class="d-flex justify-content-start bd-highlight panel-right">
					<div class="p-2 bd-highlight">
						<!-- nav-tabs -->
						<ul class="nav nav-tabs" role="tablist">
							<li class="nav-item">
								<a class="nav-link active nav-tab-item" href="#sqlfiddle-sql" role="tab" data-toggle="tab" aria-expanded="true">SQL</a>
							</li>
							<li class="nav-item">
								<a class="nav-link nav-tab-item" href="#sqlfiddle-schema-build" role="tab" data-toggle="tab" aria-expanded="false">Schema Build</a>
							</li>
							<li class="nav-item">
								<a class="nav-link nav-tab-item" href="#sqlfiddle-schema-view" role="tab" data-toggle="tab" aria-expanded="false">Schema View</a>
							</li>
						</ul>
					</div>

					<div class="ml-auto p-2 bd-highlight">
						<div class="justify-content-end">
							<i>Keep Fiddle Free &nbsp;</i> <img src="http://sqlfiddle.com/images/btn_donate_SM.gif" />
						</div>
					</div>
				</div>
				


				<!-- tab-content -->
				<div class="tab-content">
					<div role="tabpanel" class="tab-pane fade in active show" id="sqlfiddle-sql" aria-expanded="true">
						<div class="code-container">
							SELECT 1 FROM...
						</div>
					</div>
					<div role="tabpanel" class="tab-pane fade" id="sqlfiddle-schema-build" aria-expanded="false">
						<div class="code-container">
							CREATE TABLE SqlFiddle { ... }
						</div>
					</div>
					<div role="tabpanel" class="tab-pane fade" id="sqlfiddle-schema-view" aria-expanded="false">
						<div class="code-container">
							See: https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all
							<br />
							We can force to open in SQL Fiddle instead?
						</div>
					</div>
				</div>
				
				<div class="btn-group">
					<button type="button" class="btn btn-primary"><i class="fa fa-play" aria-hidden="true"></i>&nbsp;Run</button>
					<button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span class="sr-only">Toggle Dropdown</span>
					</button>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#">Tabular Output</a>
						<a class="dropdown-item" href="#">Plaintext Output</a>
						<a class="dropdown-item" href="#">Markdown Output</a>
					</div>
				</div>
				&nbsp;&nbsp;
				<button type="button" class="btn btn-dark"><i class="fa fa-refresh" aria-hidden="true"></i>&nbsp;Reset</button>
			</div>
			<div class="col-sm-6 wow slideInDown">
				<div class="d-flex justify-content-start bd-highlight panel-right">
					<div class="p-2 bd-highlight">
						<!-- nav-tabs -->
						<ul class="nav nav-tabs" role="tablist">
							<li class="nav-item">
								<a class="nav-link active nav-tab-item" href="#sqlfiddle-output" role="tab" data-toggle="tab" aria-expanded="true">Output</a>
							</li>
							<li class="nav-item">
								<a class="nav-link nav-tab-item" href="#sqlfiddle-execution-plan" role="tab" data-toggle="tab" aria-expanded="false">Execution Plan</a>
							</li>
							<li class="nav-item">
								<a class="nav-link nav-tab-item" href="#sqlfiddle-statistics" role="tab" data-toggle="tab" aria-expanded="false">Statistics</a>
							</li>
						</ul>
					</div>

					<div class="ml-auto p-2 bd-highlight">
						<nav class="navbar navbar-expand-lg">	
							<ul class="nav navbar-nav justify-content-end">
								<li class="nav-item">
									<a class="nav-link btn btn-dark" style="margin-right: 20px;" href="http://html-agility-pack.net/tutorials"><i class="fa fa-arrows-alt" aria-hidden="true"></i>&nbsp;Edit in Fiddle</a>
								</li>
								<li class="nav-item">
									<a class="nav-link btn btn-dark" href="#" onclick="addMessage('fiddle-close');"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;Close</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				
				<!-- tab-content -->
				<div class="tab-content">
					<div role="tabpanel" class="tab-pane fade in active show" id="sqlfiddle-output" aria-expanded="true">
						<div class="code-container">
							Table...
						</div>
					</div>
					<div role="tabpanel" class="tab-pane fade" id="sqlfiddle-execution-plan" aria-expanded="false">
						<div class="code-container">
							Execution Plan...
						</div>
					</div>
					<div role="tabpanel" class="tab-pane fade" id="sqlfiddle-statistics" aria-expanded="false">
						<div class="code-container">
							Statistics IO & TIME enabled for SQL Server?
						</div>
					</div>
				</div>
				
				<div class="d-flex justify-content-start bd-highlight d-flex-button">
					<div class="p-2 bd-highlight">
						<button type="button" class="btn btn-dark"><i class="fa fa-share" aria-hidden="true"></i>&nbsp;Share</button>&nbsp;&nbsp;
					</div>

					<div class="ml-auto p-2 bd-highlight">
						<a href="#" style="text-decoration: underline;">.NET Fiddle</a>
						&nbsp;|&nbsp;
						<a href="#" style="text-decoration: underline;">SQL Fiddle</a>
					</div>
				</div>
				
			</div>
			</div>
		</div>
	</div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
	<script src="https://zzzprojects.github.io/html-agility-pack-dev/css/particles.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
	</body>
</html>

<script>
new WOW().init();
</script>

<script>
function addMessage(msg) {
	window.parent.postMessage(msg,'*');
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
	var data = event.data;
	
	var sql = document.getElementById("sqlfiddle-sql").getElementsByClassName("code-container")[0];
	var schema = document.getElementById("sqlfiddle-schema-build").getElementsByClassName("code-container")[0];
	
	sql.innerText = data[1];
	schema.innerText = data[0];
}
</script>

<style>
body {
	background: #333;
	background: -webkit-radial-gradient(circle, #333, #111);
	background: -o-radial-gradient(circle, #333, #111);
	background: -moz-radial-gradient(circle, #333, #111);
	background: radial-gradient(circle, #333, #111);
	color: #fff;
}
a {
	color: #fff;
}
.row {
	padding-top: 15px;
}
.code-container {
	background: #222;
	background: -webkit-radial-gradient(circle, #222, #000);
	background: -o-radial-gradient(circle, #222, #000);
	background: -moz-radial-gradient(circle, #222, #000);
	background: radial-gradient(circle, #222, #000);
	width: 100%;
	height: 280px;
	margin-bottom: 10px;
	padding: 10px;
}
.nav-tabs {
	border-bottom:0;
}
.panel-right .p-2{
	padding: 0 !important;
}
.panel-right nav {
	padding: 0;
}
.dropdown-toggle-split {
	border-left: 1px solid #999;
}
nav .justify-content-end {
	position: relative;
	top: -5px;
	right: 20px;
}
.nav-tabs .nav-link.active {
	background-color: #e2e6ea;
	border-color: #dae0e5;
	color: #000;
}
.d-flex-button .p-2 {
	padding: 0 !important;
}
</style>