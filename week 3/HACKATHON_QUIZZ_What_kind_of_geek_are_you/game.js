const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let maxQuestions = 11;
let availableQuestions = [];

let questions = [...]

getNewQuestion = () => {
  questionCounter++;

}

// const array = [[1],[2],[3],[[[4]]],[[[5]]]];
//
// const arr2 = array.flat(2);
//
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
//
// const greeting2 = greeting.flatMap(x => {
//   return x.join(" ");
// });
// console.log(greeting2);
//
//
// const greeting3 = greeting.flat().join(" ");
// console.log(greeting3);
//
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
//
// const notTrapped = trapped.flat(Infinity);
// console.log(notTrapped);
//
// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
// const email = userEmail3.trim();
// console.log(email);
//
// const users = { user1: 18273, user2: 92833, user3: 90315 };
//
// // const arrUsers = Object.keys(users).map(function(key) {
// //   return [String(key), users[key]];
// // });
// const arrUsers = Object.entries(users);
// console.log(arrUsers);
