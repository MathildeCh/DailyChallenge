
function beers_falling () {
	var beers = prompt("how many beers do you want?")
	var bottle = 1

	
	for (var i = 1; i <= beers; i++) {
		var song = `${beers} bottles of beer on the wall
${beers} bottles of beer`
		beers -= bottle
		if (bottle <= 1) {
			song+= `\nTake ${bottle} down, pass it around`
		} else {
			song+= `\nTake ${bottle} down, pass them around`
		}

		console.log(song)	
		bottle += bottle 
	}
}

beers_falling()

//  bottles of beer on the wall
//  bottles of beer
// Take  down, pass it around
//  bottles of beer on the wall
//  bottles of beer
// Take  down, pass them around