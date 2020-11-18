/* Write a Program to convert an array of objects to an object
	based on a given key */

const convert = (arr, key) => {
	// Write your code here
	if (arr == null || arr == undefined || typeof arr != "object")
		return null;
	let obj = {};
	arr.forEach((element, index) => {
		let y = element[key]
		obj[y] = element;
	});
	return obj;
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
