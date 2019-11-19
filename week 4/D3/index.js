const users = { user1: 18273, user2: 92833, user3: 90315 };

// const arrUsers = Object.keys(users).map(function(key) {
//   return [String(key), users[key]];
// });
const arrUsers = Object.entries(users);
console.log(arrUsers);

const doubleUsers = arrUsers.map(x => [x[0], x[1] * 2]);
