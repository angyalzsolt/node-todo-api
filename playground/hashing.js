// const {SHA256} = require('crypto-js');

// let message = 'I am user number 3';

// let hash = SHA256(message).toString();
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);


// let data = {
// 	id: 4
// };

// let token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };



// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();



// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash) {
// 	console.log('data was not changed');
// } else {
// 	console.log('Data was changed. Do not trust');
// };

// const jwt = require('jsonwebtoken');

// let data = {
// 	id: 10
// };

// let token = jwt.sign(data, '123abc');
// console.log(token);

// let decoded = jwt.verify(token, '123abc');
// console.log(decoded);


const bcrypt = require('bcryptjs');

let password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	});
// });

const hashedPassword = '$2a$10$q6ZaRRRSIGu6Kqn/8aE4/eRkCUuYDFncQyUXWn5seSsFHmPrfRytG';

bcrypt.compare('123ab!', hashedPassword, (err, res) => {
	console.log(res);
})