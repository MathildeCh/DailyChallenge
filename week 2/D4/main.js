var arr = ["hello", "world", "in", "a", "frame", "bla"]
arr.splice(0, 0, "*****")
arr.push("*****")

function star (arr) {
	
	for (i=0; i < arr.length; i++) {
		arr[i] = arr.slice(i, i+1);
		// console.log(arr[i])
		arr[i].splice(0, 0, "* ")
		arr[i].push(" *")
		console.log(arr[i])
	}
}

console.log(star(arr))

// function star (arri) {
// 	"* " + item + " *" + "<br>";
// }
// console.log(arri.forEach(star));
