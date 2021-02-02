
const blue = '#075AAA'; const dark_blue = '#000066'; const light_blue = '#66B2FF';
const red = '#DB0000'; const dark_red = '#911519';
const green = '#0A8543'; const dark_green = '#005736';
const purple = '#712FBD'; const light_purple = '#ACA6FF';
const yellow = '#FFD630';
const orange = '#FF8000';
const white = '#FFFFFF';
const black = '#000000';

function viewportToPixels(value) {
  var parts = value.match(/([0-9\.]+)(vh|vw)/)
  var q = Number(parts[1])
  var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
  return side * (q/100)
};

function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
};

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
};

function vmin(v) {
  return Math.min(vh(v), vw(v));
};

function vmax(v) {
  return Math.max(vh(v), vw(v));
};

function ellipse(context, cx, cy, rx, ry, fill, stroke){
	context.save(); // save state
	context.beginPath();

	context.translate(cx-rx, cy-ry);
	context.scale(rx, ry);
	context.arc(1, 1, 1, 0, 2 * Math.PI, false);

	context.restore(); // restore to original state
	if (fill) { context.fill(); };
	if (stroke) { context.stroke(); };
};

function ellipticalArc(context, cx, cy, rx, ry, ang, fill, stroke){
	context.save(); // save state
	context.beginPath();

	context.translate(cx-rx, cy-ry);
	context.scale(rx, ry);
	context.arc(1, 1, 1, 0, ang, false);

	context.restore(); // restore to original state
	if (fill) { context.fill(); };
	if (stroke) { context.stroke(); };
};

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if ($('#scroll_buttons').length > 0) {
		// Move dots
		var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
		scrollTop = scrollTop + window.innerHeight/2;
		var height = document.getElementById("scroll_buttons").offsetHeight;
		scrollTop = scrollTop - height/2;
		var header_ht = $('#header').height();
		scrollTop = scrollTop - header_ht;

		// Check if dot is active, update css
		var inZone = 'none';
		var numOfDots = $('.scroll_button').length + $('.scroll_button_active').length;
		var tolerance = 100; // px
		var scroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
		localStorage.setItem('scroll', scroll);

		if (localStorage.getItem('controller_shown')) {
			if (localStorage.getItem('controller_shown') == 'true') {
				var controller_element = `
					<table style="margin-top: 0px; height: 100%; width: 80%; margin-right: 0px; margin-left: 20%;">
						<tr style="height: 38.75%; width: 100%"><td style="width: 100%">&nbsp;</td></tr>
						<tr style="height: 22.5%; width: 100%">
							<td style="width: 100%">
								<div id="right_sidebar_controller" style="width: 100%; height: 100%; border-collapse: collapse; z-index: 0;">
									<table style="width: 50%; height: 90%; float: left; margin: 0; border-collapse: collapse;">
										<tr style="width: 100%;">
											<td class="right_sidebar_redbutton" onclick="scroll_up()" style="width: 100%; height: 50%; border-color: #000066; border-bottom-style: solid; vertical-align: center; font-weight: bold; border-top-left-radius: 0.575em">
												&#11014;
											</td>
										</tr>
										<tr style="width: 100%;">
											<td class="right_sidebar_redbutton" onclick="scroll_down()" style="width: 100%; height: 50%; border-color: #000066; border-bottom-style: solid; vertical-align: center; font-weight: bold;">
												&#11015;
											</td>
										</tr>
									</table>
									<table style="width: 50%; height: 90%; float: left; margin: 0; border-collapse: collapse">
										<tr style="width: 100%; height: 33.333%">
											<td class="right_sidebar_whitebutton" onclick="goto_cq()" style="width: 100%; border-color: #000066; border-left-style: solid; border-bottom-style: solid; vertical-align: center; font-weight: normal; font-size: 1.15em; padding-right: 5%; padding-bottom: 2.5%">
												&#9679;
											</td>
										</tr>
										<tr style="width: 100%; height: 33.333%">
											<td class="right_sidebar_whitebutton" onclick="goto_game()" style="width: 100%; border-color: #000066; border-left-style: solid; border-bottom-style: solid; vertical-align: center; font-weight: normal; font-size: 0.95em">
												&#9658;
											</td>
										</tr>
										<tr style="width: 100%; height: 33.333%">
											<td class="right_sidebar_whitebutton" onclick="goto_questions()" style="width: 100%; border-color: #000066; border-left-style: solid; border-bottom-style: none; vertical-align: center; font-weight: normal; font-size: 0.85em; padding-right: 5%">
												?
											</td>
										</tr>
									</table>
									<div class="right_sidebar_bluebutton" onclick="show_controller('false')" style="width: 100%; height: 10%; border-color: #000066; border-top-style: solid; border-bottom-style: solid; border-bottom-left-radius: 0.8em; float: left; padding-top: 0.12em; margin-top: -0.165em; z-index: -10">
										&nbsp;
									</div>
								</div>
							</td>
						</tr>
						<tr style="height: 38.75%; width: 100%"><td style="width: 100%">&nbsp;</td></tr>
					</table>`;
	  			document.getElementById("right_sidebar").innerHTML = controller_element;
			};
		}
		else {
			localStorage.setItem('controller_shown', 'false');
		};

		for (index = 0; index < numOfDots; index++) {
			if (inZone == 'none') {
				var header_ht = $('#header').height();
				var b_header_ht = 0;
				if ($('#b_header').length > 0) { b_header_ht = $('#b_header').height(); };
				var above = document.getElementById(index.toString()).offsetTop;
				var height = document.getElementById(index.toString()).offsetHeight;
				var mid = Math.max(above + height/2, 0);

				var view_radius = window.innerHeight/2;
				var y = mid - view_radius - header_ht + 1.75*b_header_ht;
				if (height > 1.05*(window.innerHeight - header_ht - b_header_ht)) {
					y = y - view_radius + 6*vmax(1);
				};
				y = Math.max(y, 0);

				// var pos = scroll + window.innerHeight/2;
				// var top = above + 5*vmax(1);
				// var bottom = above + height + 5*vmax(1);

				if (y >= scroll - 1.05*height/2 && y <= scroll + 1.05*height/2) {
					inZone = index;
				};
			};
		};

		var totalH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
		if (scroll > totalH - innerHeight - tolerance) {
			inZone = numOfDots - 1 ;
		};
		if (scroll < tolerance) {
			inZone = 0 ;
		};

		for (index = 0; index < numOfDots; index++) {
			if (inZone == index) {
				document.getElementById("scroll_button" + index.toString()).className = 'scroll_button_active';
			}
			else if (document.getElementById("scroll_button" + index.toString()).className == 'scroll_button_active') {
				document.getElementById("scroll_button" + index.toString()).className = 'scroll_button';
			};
		};
	};
};

function scrollToIndex(index) {
	// Scroll to view
	var header_ht = $('#header').height();
	var b_header_ht = 0;
	if ($('#b_header').length > 0) { b_header_ht = $('#b_header').height(); };
	var above = document.getElementById(index.toString()).offsetTop;
	var height = document.getElementById(index.toString()).offsetHeight;
	var mid = above + height/2;

	var view_radius = window.innerHeight/2;
	var y = mid - view_radius - header_ht + 1.75*b_header_ht;
	if (height > 1.05*(window.innerHeight - header_ht - b_header_ht)) {
		y = y - (height/2) + view_radius - vmax(7.5);
	};
	y = Math.max(y, 0);

	window.scrollTo(0, y);
	scrollFunction();
};

function scroll_up() {
	// Scroll up one index
	var numOfDots = $('.scroll_button').length + $('.scroll_button_active').length;
	var active_index = 0;
	for (index = 0; index < numOfDots; index++) {
		if (document.getElementById("scroll_button" + index.toString()).className == 'scroll_button_active') {
			active_index = index;
		};
	};
	var goto_index = Math.max(active_index - 1, 0);
	scrollToIndex(goto_index);
};

function scroll_down() {
	// Scroll down one index
	var numOfDots = $('.scroll_button').length + $('.scroll_button_active').length;
	var active_index = 0;
	for (index = 0; index < numOfDots; index++) {
		if (document.getElementById("scroll_button" + index.toString()).className == 'scroll_button_active') {
			active_index = index;
		};
	};
	var goto_index = Math.min(active_index + 1, numOfDots - 1);
	scrollToIndex(goto_index);
};

function show_controller(value) {
	// Scroll down one index
	localStorage.setItem('controller_shown', value);
	if (value == 'true') {
		var controller_element = `
			<table style="margin-top: 0px; height: 100%; width: 80%; margin-right: 0px; margin-left: 20%;">
				<tr style="height: 38.75%; width: 100%"><td style="width: 100%">&nbsp;</td></tr>
				<tr style="height: 22.5%; width: 100%">
					<td style="width: 100%">
						<div id="right_sidebar_controller" style="width: 100%; height: 100%; border-collapse: collapse; z-index: 0;">
							<table style="width: 50%; height: 90%; float: left; margin: 0; border-collapse: collapse;">
								<tr style="width: 100%;">
									<td class="right_sidebar_redbutton" onclick="scroll_up()" style="width: 100%; height: 50%; border-color: #000066; border-bottom-style: solid; vertical-align: center; font-weight: bold; border-top-left-radius: 0.575em">
										&#11014;
									</td>
								</tr>
								<tr style="width: 100%;">
									<td class="right_sidebar_redbutton" onclick="scroll_down()" style="width: 100%; height: 50%; border-color: #000066; border-bottom-style: solid; vertical-align: center; font-weight: bold;">
										&#11015;
									</td>
								</tr>
							</table>
							<table style="width: 50%; height: 90%; float: left; margin: 0; border-collapse: collapse">
								<tr style="width: 100%; height: 33.333%">
									<td class="right_sidebar_whitebutton" onclick="goto_cq()" style="width: 100%; border-color: #000066; border-left-style: solid; border-bottom-style: solid; vertical-align: center; font-weight: normal; font-size: 1.15em; padding-right: 5%; padding-bottom: 2.5%">
										&#9679;
									</td>
								</tr>
								<tr style="width: 100%; height: 33.333%">
									<td class="right_sidebar_whitebutton" onclick="goto_game()" style="width: 100%; border-color: #000066; border-left-style: solid; border-bottom-style: solid; vertical-align: center; font-weight: normal; font-size: 0.95em">
										&#9658;
									</td>
								</tr>
								<tr style="width: 100%; height: 33.333%">
									<td class="right_sidebar_whitebutton" onclick="goto_questions()" style="width: 100%; border-color: #000066; border-left-style: solid; border-bottom-style: none; vertical-align: center; font-weight: normal; font-size: 0.85em; padding-right: 5%">
										?
									</td>
								</tr>
							</table>
							<div class="right_sidebar_bluebutton" onclick="show_controller('false')" style="width: 100%; height: 10%; border-color: #000066; border-top-style: solid; border-bottom-style: solid; border-bottom-left-radius: 0.8em; float: left; padding-top: 0.12em; margin-top: -0.165em; z-index: -10">
								&nbsp;
							</div>
						</div>
					</td>
				</tr>
				<tr style="height: 38.75%; width: 100%"><td style="width: 100%">&nbsp;</td></tr>
			</table>`;
		document.getElementById("right_sidebar").innerHTML = controller_element;
	}
	else {
		var controller_element = `
			<table style="margin-top: 0px; height: 100%; width: 60%; margin-right: 0px; margin-left: 40%;">
				<tr style="height: 42.5%;">
					<td style="width: 70%">&nbsp;</td>
					<td style="width: 30%">
						&nbsp;
					</td>
				</tr>
				<tr style="height: 15%;">
					<td style="width: 70%">&nbsp;</td>
					<td id="right_sidebar_button" onclick="show_controller('true')" style="width: 30%; padding-right: 5%">
						&nbsp;
					</td>
				</tr>
				<tr style="height: 42.5%;">
					<td style="width: 70%">&nbsp;</td>
					<td style="width: 30%">
						&nbsp;
					</td>
				</tr>
			</table>`;
		document.getElementById("right_sidebar").innerHTML = controller_element;
	};
};

function update_size() {
	var tenth = 0.0085 * window.innerWidth * window.devicePixelRatio;
	var fsize = `${tenth}px`;
	document.getElementById("wrapper").style.fontSize = fsize;
	document.getElementById("body").style.fontSize = fsize;

	var browserZoomLevel = Math.round(window.devicePixelRatio * 100);
	var width = window.innerWidth * window.devicePixelRatio;
	if (browserZoomLevel > 100) {
		document.getElementById("header").style.width = width.toString() + 'px';
		document.getElementById("header").style.maxWidth = '100%';
		if ($('#b_header').length > 0) { document.getElementById("b_header").style.width = width.toString() + 'px'; };
		if ($('#b_header').length > 0) { document.getElementById("b_header").style.maxWidth = '100%'; };
		document.getElementById("body").style.width = width.toString() + 'px';
		document.getElementById("body").style.maxWidth = '100%';
	}
	else {
		document.getElementById("header").style.width = '100vw';
		document.getElementById("header").style.maxWidth = '100%';
		if ($('#b_header').length > 0) { document.getElementById("b_header").style.width = '100vw'; };
		if ($('#b_header').length > 0) { document.getElementById("b_header").style.maxWidth = '100%'; };
		document.getElementById("body").style.width = '100vw';
		document.getElementById("body").style.maxWidth = '100%';
	};

  	if (screen.width > screen.height) { var screen_max = (1/window.devicePixelRatio)*screen.width/100; }
  	else { var screen_max = (1/window.devicePixelRatio)*screen.height/100; };
	$('.header').css('font-size', `${screen_max}px`);

	if ($('#header').height() >= 3*screen_max) {
		$('#header').css('height', `${5*screen_max}px`);
		$('#header_wrapper').css('height', `${5*screen_max}px`);
	}
	else {
		$('#header').css('height', `${2.5*screen_max}px`);
		$('#header_wrapper').css('height', `${2.5*screen_max}px`);
	};

	if ($('#b_header').length > 0) { $('#b_header').css('height', `${2*screen_max}px`); };
	if ($('#b_header').length > 0) { $('#b_header_wrapper').css('height', `${2*screen_max}px`); };
	$('#scroll_buttons').css('width', `${0.75*screen_max}px`);
	$('.scroll_button').css({'border-top-width': `${0.2*screen_max}px`, 'border-bottom-width': `${0.2*screen_max}px`});
	$('.scroll_button_active').css({'border-top-width': `${0.2*screen_max}px`, 'border-bottom-width': `${0.2*screen_max}px`});
	$('#right_sidebar').css('width', `${6*screen_max}px`);
	$('#right_sidebar').css('font-size', `${1.35*screen_max}px`);

	var header_ht = $('#header').height();
	var b_header_ht = 0;
	if ($('#b_header').length > 0) { b_header_ht = $('#b_header').height(); };

	var borderWidth = 0;
  	if ($('.scroll_button').length > 0) { borderWidth = 0.5*parseFloat(getComputedStyle(document.querySelector('.scroll_button'))['border-bottom-width'].replace('px', '')); };
  	var bar_ht = window.innerHeight - header_ht - b_header_ht - borderWidth;
	if ($('#left_sidebar').length > 0) {
	  	document.getElementById("left_sidebar").style.height = `${bar_ht}px`;
	  	document.getElementById("left_sidebar").style.top = `${header_ht}px`;
	};
	if ($('#right_sidebar').length > 0) {
	  	document.getElementById("right_sidebar").style.height = `${bar_ht + borderWidth}px`;
	  	document.getElementById("right_sidebar").style.top = `${header_ht}px`;
	};
};

function position_slides() {

	var n_slides = $('.scroll_button').length;
	var window_ht = document.getElementById('scroll_buttons').offsetHeight;

	var first = document.getElementById('0');
	var first_ht = first.offsetHeight;
	var first_margin = (window_ht - first_ht) / 2;
	first.style.marginTop = first_margin.toString() + 'px';

	var max_margin = 0;
	for (var i = 0; i <= n_slides; i++) {
		var element = document.getElementById(i.toString());
		var ht = element.offsetHeight;
		var margin = (window_ht - ht) / 2;
		if (margin > max_margin) { max_margin = margin; };
	};

	if (n_slides > 1) {
		for (var i = 1; i <= n_slides; i++) {
			document.getElementById(i.toString()).style.marginTop = max_margin.toString() + 'px';
		};
	};

	var last_index = (n_slides).toString();
	var last = document.getElementById(last_index);
	var last_ht = last.offsetHeight;
	var last_margin = window_ht - last_ht - max_margin + document.getElementById('b_header').offsetHeight;
	last.style.marginBottom = last_margin.toString() + 'px';
};

function read(x) {
  	x = x.split("^").join("**");
  	x = x.split("pi").join("(3.141592653)");
  	x = x.split("&pi;").join("(3.141592653)");
  	x = x.split("π").join("(3.141592653)");
	x = x.split("×").join("*");
	x = x.split("sin").join("Math.sin");
	x = x.split("cos").join("Math.cos");
	x = x.split("tan").join("Math.tan");
	x = x.split("sec").join("Math.sec");
	x = x.split("csc").join("Math.csc");
	x = x.split("cot").join("Math.cot");
	x = x.split("asin").join("Math.asin");
	x = x.split("acos").join("Math.acos");
	x = x.split("atan").join("Math.atan");
	x = x.split("asec").join("Math.asec");
	x = x.split("acsc").join("Math.acsc");
	x = x.split("acot").join("Math.acot");
	x = x.split("sin**-1").join("Math.asin");
	x = x.split("cos**-1").join("Math.acos");
	x = x.split("tan**-1").join("Math.atan");
	x = x.split("sec**-1").join("Math.asec");
	x = x.split("csc**-1").join("Math.acsc");
	x = x.split("cot**-1").join("Math.acot");
	x = x.split("sin**(-1)").join("Math.asin");
	x = x.split("cos**(-1)").join("Math.acos");
	x = x.split("tan**(-1)").join("Math.atan");
	x = x.split("sec**(-1)").join("Math.asec");
	x = x.split("csc**(-1)").join("Math.acsc");
	x = x.split("cot**(-1)").join("Math.acot");
	x = x.split("arcsin").join("Math.asin");
	x = x.split("arccos").join("Math.acos");
	x = x.split("arctan").join("Math.atan");
	x = x.split("arcsec").join("Math.asec");
	x = x.split("arccsc").join("Math.acsc");
	x = x.split("arccot").join("Math.acot");
	x = x.split("e").join("Math.E");
	x = x.split("0(").join("0*(");
	x = x.split("1(").join("1*(");
	x = x.split("2(").join("2*(");
	x = x.split("3(").join("3*(");
	x = x.split("4(").join("4*(");
	x = x.split("5(").join("5*(");
	x = x.split("6(").join("6*(");
	x = x.split("7(").join("7*(");
	x = x.split("8(").join("8*(");
	x = x.split("9(").join("9*(");
	x = x.split("x(").join("x*(");
	x = x.split("y(").join("y*(");
	x = x.split("0x").join("0*x");
	x = x.split("1x").join("1*x");
	x = x.split("2x").join("2*x");
	x = x.split("3x").join("3*x");
	x = x.split("4x").join("4*x");
	x = x.split("5x").join("5*x");
	x = x.split("6x").join("6*x");
	x = x.split("7x").join("7*x");
	x = x.split("8x").join("8*x");
	x = x.split("9x").join("9*x");
	x = x.split("xx").join("x*x");
	x = x.split("yx").join("y*x");
  	x = eval(x);
	return x
};

$(window).resize(function() { 
	update_size();
	position_slides();
});

function standard_onload() {
	update_size();
	if (!localStorage.getItem("scroll")) {
		window.scrollTo(0, localStorage.getItem("scroll"));
	};
	scrollFunction();

	if (screen.width > screen.height) { var screen_max = (1/window.devicePixelRatio)*screen.width/100; }
	else { var screen_max = (1/window.devicePixelRatio)*screen.height/100; };
	$('.header').css('font-size', `${screen_max}px`);

	if ($('#header').height() >= 3*screen_max) {
		$('#header').css('height', `${5*screen_max}px`);
		$('#header_wrapper').css('height', `${5*screen_max}px`);
	}
	else {
		$('#header').css('height', `${2.5*screen_max}px`);
		$('#header_wrapper').css('height', `${2.5*screen_max}px`);
	};
	
	if ($('#b_header').length > 0) { $('#b_header').css('height', `${2*screen_max}px`); };
	$('.scroll_buttons').css('width', `${0.75*screen_max}px`);
	$('.scroll_button').css({'border-top-width': `${0.2*screen_max}px`, 'border-bottom-width': `${0.2*screen_max}px`});
	$('.scroll_button_active').css({'border-top-width': `${0.2*screen_max}px`, 'border-bottom-width': `${0.2*screen_max}px`});
	$('#right_sidebar').css('width', `${6*screen_max}px`);
	$('#right_sidebar').css('font-size', `${1.35*screen_max}px`);

	var header_ht = $('#header').height();
	var b_header_ht = 0;
	if ($('#b_header').length > 0) { b_header_ht = $('#b_header').height(); };

	var borderWidth = 0;
  	if ($('.scroll_button').length > 0) { borderWidth = 0.5*parseFloat(getComputedStyle(document.querySelector('.scroll_button'))['border-bottom-width'].replace('px', '')); };
  	var bar_ht = window.innerHeight - header_ht - b_header_ht - borderWidth;
	if ($('#left_sidebar').length > 0) {
	  	document.getElementById("left_sidebar").style.height = `${bar_ht}px`;
	  	document.getElementById("left_sidebar").style.top = `${header_ht}px`;
	};
	if ($('#right_sidebar').length > 0) {
	  	document.getElementById("right_sidebar").style.height = `${bar_ht + borderWidth}px`;
	  	document.getElementById("right_sidebar").style.top = `${header_ht}px`;
	};

	position_slides();
};