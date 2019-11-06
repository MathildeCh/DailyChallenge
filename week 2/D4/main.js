var arr = ["hello", "world", "in", "a", "frame", "bla"]
arr.splice(0, 0, "*********")
arr.push("*********")

function star () {
	
	for (i=0; i < arr.length; i++) {
		arr[i] = arr.slice(i, i+1);
		// console.log(arr[i])
		arr[i].splice(0, 0, "* ")
		arr[i].push(" *")
		console.log(arr[i])
	}
}

alert(star(arr))

// function star (arri) {
// 	"* " + item + " *" + "<br>";
// }
// console.log(arri.forEach(star));

// [Deprecation] Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience