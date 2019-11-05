// sort any array using a for loop
// after sotrting the result will be [9,8,7,6,5,4,3,2,1,0]

const arr = [5,0,9,1,7,4,2,6,3,8];

console.log(arr.toString());
// result 5,0,9,1,7,4,2,6,3,8

// hint - use a temporary VARIABLE
// let temp;
// hint # 2 - use 2 loops
for (let i = 0; i < arr.length; i ++) {
	arr.sort();
}

console.log(arr.toString());
//result- 9,8,7,6,5,4,3,2,1,0
