---
layout: post
permalink: console-example-html
---

<script src="/js/fiddle-console-0.0.1.js"></script>

// User can use his own code highlighter or use the one we will provide with our API

<pre id="code-1" class="code-console">
public class Program {
	public static void Main(){
		int i = 2 + 10;	
		System.Console.WriteLine("Hello World:" + i);
	}
}
</pre>
<button onclick="dotnetfiddle.show2({'code': document.getElementById('code-1').innerText});">Run It</button>
