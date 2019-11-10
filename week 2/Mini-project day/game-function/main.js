
// FIRST PART : START

function playGame () {
	var answer = confirm("Do you want to play the game ?")
	if (answer == true) {
		var num = parseInt(prompt("Put a number between 0 and 10"))
		console.log(num)
		if (isNaN(num) == true) {
			alert("Sorry Not a number, Goodbye")
		} else if (num < 0 || num > 10) {
			alert("Sorry it's not a good number,Goodbye")
		} else {
			var computerNumber = Math.floor(Math.random() * 11)
			console.log(computerNumber)
			test(num, computerNumber)
		}
	} else {
		alert("No problem, Goodbye")
	}
	
}



// SECOND PART 

function test (num, computerNumber) {
	var game_count = 3
	while (game_count>0) {
		// playGame()
		if (num == computerNumber) {
			alert("you won !!")
			console.log(num)
			console.log(computerNumber)
			return;
		} else if (num > computerNumber) {
			alert("Too big. Try again.")
			num = prompt("Put a number between 0 and 10")
		} else {
			alert("Too small. Try again.")
			num = prompt("Put a number between 0 and 10")
		}
		game_count -= 1
	}
	alert("You can't try again. The number that the computer had in mind was "+computerNumber)
}

// console.log(test())

// document.getElementById("demo").innerHTML = 