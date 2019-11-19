var cancel = document.getElementById("return");
cancel.addEventListener("click", comeOn);
function comeOn () {
	alert("Come on man! Be brave.");
	count_point();
 }


var submit = document.getElementById("quizz");
submit.addEventListener("onclick", count_point) 

function count_point () {
       var Q1 = parseInt(document.querySelector('input[name = "Q1"]:checked').value);
       var Q2 = parseInt(document.querySelector('input[name = "Q2"]:checked').value);
       var Q3 = parseInt(document.querySelector('input[name = "Q3"]:checked').value);
       var Q4 = parseInt(document.querySelector('input[name = "Q4"]:checked').value);
       var Q5 = parseInt(document.querySelector('input[name = "Q5"]:checked').value);
       var Q6 = parseInt(document.querySelector('input[name = "Q6"]:checked').value);
       var Q7 = parseInt(document.querySelector('input[name = "Q7"]:checked').value);
       var Q8 = parseInt(document.querySelector('input[name = "Q8"]:checked').value);
       var Q9 = parseInt(document.querySelector('input[name = "Q9"]:checked').value);
       var Q10 = parseInt(document.querySelector('input[name = "Q10"]:checked').value);

       var result = Q1+Q2+Q3+Q4+Q5+Q6+Q7+Q8+Q9+Q10;
       console.log(result);
      

		if (result < 16) {
		alert("GAME OVER ! You're a NERD.");
		nerd();
	} else if (result < 26) {
		alert("You're a hacker!");
		hacker();
	} else if (result < 36) {
		alert("Docteur Jegeek and Mr Hyde.");
	} else {
		alert("A Super Geek Chick!")
	}
};

function nerd() {

	let profilNerd = document.getElementById("profil");
	profilNerd.innerHTML = "Il paraîtrait que tu appartiennes à l’espèce des nerds. Premier de la classe, toujours prêt à dégainer tes lunettes et la dernière revue de sciences et vie, les daily challenges sont une vaste blague pour toi. Tu fuis les salles de sport, adule Captain America et Naruto, plutôt psycho rigide et introverti, ton ordinateur et ta main droite sont tes meilleurs amis. Mais réjouis-toi car si ta première expérience sexuelle consentante n'est pas pour tout de suite, tu auras un futur dépourvu de problèmes financiers, car ton intelligence n’a d’égale que ton manque de charisme."
}

function hacker () {
	let profilHacker = document.getElementById("profil");
	profilHacker.innerHTML = "Actuellement ou anciennement ado enragé, tu as fait de ton hobbie un acte de rébellion, poussé par une soif de justice ou bien une incroyable envie de faire chier. Un kilo d’audace, deux cuillères à soupe d’insolence, une pointe d’obstination obsessionnelle et un grand verre de malice nous donne ton profil, qui s’étend du hacker bienveillant à l’Anonymous sans foi ni loi. Tu ne cesses d’expérimenter et de trafiquer, à la Bat Man, pour le fun mais aussi car tu aimes par-dessus tout te challenger personnellement et si tu pouvais, d’une pierre deux coups, changer le monde et créer une société plus juste, tu ne dis pas non. Souvent tourmenté et négligé, tu es un vrai passionné et le pouvoir que te confères les nouvelles technologies que tu maîtrises à la perfection t’étourdis. Mais attention petit suricate, à ne pas te prendre trop au sérieux, sinon comme Light tu finiras aux cieux. ";
}
// var direction_i = 0,
//     $window = $(window);

// $(document).scroll(function() {
//   hr_scroll();
// });


// hr_scroll();

// function hr_scroll() {
//   var scroll_top = $window.scrollTop(),
//       direction = (scroll_top > direction_i) ? 'up' : 'down',
//       direction_i = scroll_top;

//   $('hr').each(function() {
//     var $this = $(this),
//         from_top = $this.offset().top - scroll_top - 100,
//         is_activated = $this.hasClass('activated');
    
//     if (from_top < 300 && from_top > 0) {
//       if (is_activated) {
//         $this.removeClass('activated');
//       }
//       $this.css('width', (100 - (from_top/300) * 100) + '%');
//     }

//     if (from_top <= 0 && !is_activated) {
//       if (direction === 'down') {
//         $this.addClass('activated');
//       }
//     }
    
//   });
// }


Resources




// var qu2 = document.getElementById("qu2")
// qu2.style.visibility = "hidden";
// qu2.addEventListener("click", unfade());

// function show(qu2){
// 	document.getElementById("qu2").style.visibilty = "visible";;
// };


// function unfade(element) {
//     var op = 0.1;  // initial opacity
//     element.style.display = 'block';
//     var timer = setInterval(function () {
//         if (op >= 1){
//             clearInterval(timer);
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op += op * 0.1;
//     }, 10);
// }



// document.getElementById("profil").innerHTML = result;


