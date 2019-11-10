
function beers_falling () {
	var beers = prompt("how many beers do you want?")
	
	for (var i = 1; i <= beers; i++) {
		var song = `${beers} bottles of beer on the wall
${beers} bottles of beer`
		beers -= i
		if (i <= 1) {
			song+= `\nTake ${i} down, pass it around`
		} else {
			song+= `\nTake ${i} down, pass them around`
		}

		console.log(song)	
	}
}

beers_falling()

//  bottles of beer on the wall
//  bottles of beer
// Take  down, pass it around
//  bottles of beer on the wall
//  bottles of beer
// Take  down, pass them around