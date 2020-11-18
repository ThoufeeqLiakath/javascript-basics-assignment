/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
	// Write your code here
	if (!Array.isArray(arr))
		return null;

	let returnArr = [];
	arr.forEach(element => {
		if (Array.isArray(element)) {
			SpreadArray(element,returnArr);
		}
		else {
			returnArr.push(element)
		}
	});
	return returnArr;
};

let SpreadArray = function (ele, returnArr) {
	ele.forEach(element => {
		if (Array.isArray(element)) {
			element.forEach(e=>
				{
					if(Array.isArray(e))
					{
						SpreadArray(e,returnArr);
					}
					else{
						returnArr.push(e);
					}
				});
		}
		else {
			returnArr.push(element);
		}
		return returnArr;
	})

}


/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
