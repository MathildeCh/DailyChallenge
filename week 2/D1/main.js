text=""

function my_f(x){


	if (x !== "=") {
		text = text + x;
	} else {
		text = eval(text);
		alert(text);
	}
}