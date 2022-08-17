const rotateArray = require('../rotate-array/rotate-array.js');

//- If number zero return the array unchanged

//rotateArray([1, 2, 3], 0);
// should return [1,2,3]


// - If number positive return the array rotated x times to the right


//rotateArray([1, 2, 3], 1);
// should return [3, 1, 2]

//rotateArray([1, 2, 3, 4, 5], 3);
// should return [3, 4, 5, 1, 2]

// - If number negative return the array rotated x times to the left

//rotateArray([1, 2, 3], -1);
// should return [2, 3, 1]

//rotateArray([1, 2, 3, 4, 5], -3);
// should return [4, 5, 1, 2, 3]



describe("rotateArray function tests", () => {
	test("returns an array", () => {
		expect(rotateArray([], 0)).toEqual([]);
	});	

});
