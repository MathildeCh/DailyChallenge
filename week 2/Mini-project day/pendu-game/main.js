
var secret = ['xylophone','trompette','ordinateur']


function query(){
	var answer = prompt('guess a letter:')
	while (answer.length != 1) {
		answer = prompt('Incorrect; guess a letter:')
	}
	return answer
}



function main() {
	var rand = Math.floor(Math.random() * secret.length);
	var randWord = secret[rand];
	var q = randWord.split('')
	for (var i = 1; i < q.length-1; i++) {
		q[i] = '*';
	}
	var word_to_guess = q.join('')
	console.log('Hello welcome to hangman')
	
	var game_count = 10

	while (word_to_guess != randWord && game_count > 0 ) {
		console.log('word to guess', word_to_guess)
	
		var answer = query();

		for (var i = 0; i < randWord.split('').length; i++) {
			if (answer == randWord.split('')[i] ) {
					q[i] = answer;
			}
		}
		word_to_guess = q.join('')
		console.log('Word now', word_to_guess)

		game_count -= 1

		console.log('You have ' +game_count + ' tries left')


	}
	if (word_to_guess == randWord) {
		console.log('Victory')
	}
	if (game_count==0) {
		console.log('You lost !')
	}


}

 main()