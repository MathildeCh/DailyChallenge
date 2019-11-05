var array = ["Banana", "Apples", "Oranges", "Blueberries"];

/*1. remove Banana*/

array.splice(0, 1);
/*null instead of 0 works also*/

console.log(array);

/*2. sort the array in order*/

array.sort();

/*3. Put kiwi at the end*/

array.push("Kiwi");

console.log(array);

/*4. Remove Apple*/

array.splice(null, 1);
console.log(array);

/*5. Reverse order */

array.reverse();
console.log(array);

/*###########################################*/

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

var Oranges = array2[1][1][0]
console.log("Oranges")

/*var o = array2.indexOf("Oranges")
console.log(o)*/

/*-1 = not found*/