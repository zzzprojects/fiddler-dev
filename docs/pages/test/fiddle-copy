---
layout: post
permalink: fiddle-copy
---

<html>
<head>
    <meta charset="utf-8" />
    <title>.NET Fiddle</title>
	<meta http-equiv="X-UA-Compatible" content="IE=9">

    

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta http-equiv="edit-Type" edit="text/html; charset=utf-8">

    
	<link href="https://dotnetfiddle.net/bundles/codemirrorcss?v=pB852hOK83J4fBx1xj2jabtKMZRNfMx4t4lWfNXplVE1" rel="stylesheet"/>

	<link href="https://dotnetfiddle.net/Content/css/widget.css" rel="stylesheet"/>


	<style type="text/css">
		#output {
			padding: 5px 8px;
		}
	</style>

	<link href="https://dotnetfiddle.net/Content/packages/bootstrap-3.0.2/css/bootstrap.min.css" rel="stylesheet"/>

    <link href="https://dotnetfiddle.net/bundles/css/widget?v=cvX98rZGrSGLGp9TOPd5B5XSpQ7EYVt9JdwI8k-aon01" rel="stylesheet"/>

</head>
<body>
    



    <!-- Console -->
	<input type="hidden" id="OriginalConsole-0" value="public class Program { public static void Main(){System.Console.WriteLine(42);}}" />
	<!-- Script -->
	<input type="hidden" id="OriginalScript-0" value="public class Program { public static void Main(){System.Console.WriteLine(42);}}" />

<!-- Console -->
<input type="hidden" id="OriginalConsole" />

<!-- Script -->
<input type="hidden" id="OriginalScript" />

<input type="hidden" id="OriginalCodeBlock">
<input type="hidden" id="OriginalFiddleId">
<input type="hidden" id="TimeOffset">
<input type="hidden" id="ProjectType" value="1">
<input type="hidden" id="Language" name="Language">
<input type="hidden" id="Compiler" value="2" />

<input id="OriginalNuGetPackageVersionIds" type="hidden" value="" />
<input id="NuGetPackageVersionIds" type="hidden" value="" />

<h3 style="position: absolute; left:30%;z-index:10">Sample Widget Console text 2</h3>

<div id="main">
	<div class="row widget">
		<div class="col-xs-12 col-md-12">
			<ul id="tabs" class="nav nav-tabs widget-lang-tabs">
				<li class="site-link">
					<a href="https://dotnetfiddle.net/?projectType=Console&amp;compiler=Roslyn&amp;language=CSharp&amp;codeBlock=public%20class%20Program%20%7B%20public%20static%20void%20Main%28%29%7BSystem.Console.WriteLine%2842%29%3B%7D%7D" target="_blank" id="site-link">Edit in .NET Fiddle</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="row widget-content">

	</div>
</div>

<div class="modal fade" id="preload-dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="normal-header modal-title">Loading packages and dependencies</h4>
			</div>
			<div class="modal-body">
			</div>
		</div>
	</div>
</div>
<div class="overlay" unselectable="on" onselectstart="return false;" onmousedown="return false;"></div>


<script id="widget-console-template" type="text/x-handlebars-template">
	<div class="col-xs-12 col-sm-12 col-md-6 col-code active">
		<textarea id="Console" class="textarea-code code-block">{{codeBlocks.Console}}</textarea>
	</div>
	<div class="col-xs-12 col-sm-12 col-md-6 col-output">
		<div class="textarea-output">
			<div id="output" class="output" style="height: auto;"></div>
			<div id="input" contenteditable="true"></div>
		</div>
		<div id="stats-loader" style="display: none;">
			<div class="bg"></div>
			<div class="spin"></div>
		</div>
	</div>
</script>

<script id="widget-script-template" type="text/x-handlebars-template">
	<div class="col-xs-12 col-sm-12 col-md-6 col-code active">
		<textarea id="Script" class="textarea-code code-block">{{codeBlocks.Script}}</textarea>
	</div>
	<div class="col-xs-12 col-sm-12 col-md-6 col-output">
		<div class="textarea-output">
			<div id="output" class="output" style="height: auto;"></div>
			<div id="input" contenteditable="true"></div>
		</div>
		<div id="stats-loader" style="display: none;">
			<div class="bg"></div>
			<div class="spin"></div>
		</div>
	</div>
</script>
    
    <script src="https://dotnetfiddle.net/bundles/jquery?v=UgyEMAYOuSB9Bb6HcOEVHpd6fIIp54yF086SRNVcdIY1"></script>


    <script type="text/javascript">
        (function () {
            var style = document.createElement("style"), height = window.innerHeight;
            style.appendChild(document.createTextNode(".CodeMirror { height: " + (height - 38) + "px} .output { height: " + (height - 47) + "px}"));
            document.head.appendChild(style);
        })();
    </script>

    
	<script type="text/javascript">
        var fiddles = [];
	</script>

	<script src="https://dotnetfiddle.net/Content/packages/bootstrap-3.0.2/js/bootstrap.min.js"></script>

	<script src="https://dotnetfiddle.net/bundles/jqueryui?v=lc_RCpFs7BhXflBrmcGNMTXHnVlW_8_i6uPgTjDnxFk1"></script>

	<script src="https://dotnetfiddle.net/bundles/codemirror?v=QATV3Eck0xxD2wxYwCUx2xrqa0evOl1Djk2muEcAr7s1"></script>

	<script src="https://dotnetfiddle.net/bundles/js/widget?v=KETkycRsxH5dE6wIfjgtie9lGJUC64fEhmrTtB2ZvnI1"></script>


	<script type="text/javascript">

    var newFiddle;

		

    	var pr = ProjectTypesDict[1];;
    	var compiler = CompilersDict[2];;
		var code = $('#Original' + pr + '-' + '0').val();

    codeBlocks.Add("1", "", code);

    newFiddle = new Fiddle();

    var cbs = {};
    cbs[pr] = code
    console.log('cbs', cbs);
    newFiddle.init({
        fiddleId: "",
        language: LanguagesDict["1"],
        projectType: pr,
        codeBlocks: cbs,
        compiler: compiler,
    });

    fiddles.push(newFiddle);
    

    $(document).ready(function() {

        ready(1, 1, 2);
        fiddle = fiddles[0];

        var anchor = null;

        $.each(codeBlocks.Collection, function(ind, val) {
            var codeBlock = val;
            var a = insertTab(codeBlock.LanguageId);
            if(ind==0)
                anchor = a;
        });

        anchor.click();


        $("#site-link").click(function(e) {
            var self = this;
            $.ajax({
                url: "/Widget/GetDotNetFiddleUrl",
                type: "POST",
                async: false,
                contentType: "application/json",
                data: JSON.stringify(fiddle.getWidgetRequest()),
                success: function(url) {

                    if (url == null) {
                        e.preventDefault();
                        return false;
                    }
                    self.href = url;
                    return true;
                }
            });
        });

    });
	</script>



        <script>
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-45542977-1', 'dotnetfiddle.net');
            ga('send', 'pageview');
        </script>
	
	<style id="profiler-minimizer-css">
		.profiler-results {
			display: none;
		}
	</style>
	<script type="text/javascript" id="profiler-minimizer">
		$(document).ready(function () {
			 var e = function () {
			 	var e = $(".profiler-results");
			 	if (e.length == 0) return false;
			 	e.addClass("profiler-min");
				 return true;
			 };
			
			var t = function () {
				var n = e();
				if (n) {
					$("#profiler-minimizer").remove(); $("#profiler-minimizer-css").remove();
					return;
				}
				setTimeout(t, 50);
			};
			t();
		})
	</script>;
</body>
</html>
