const rotateArray = require('../rotate-array/rotate-array.js');


describe("rotateArray function tests", () => {
	test("returns an array", () => {
		expect(rotateArray([], 0)).toEqual([]);
	});	
	test("returns array with same values when num 0", () => {
		expect(rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
	});	
	test("returns an array with correctly changed values when num +ve", () => {
		expect(rotateArray([1, 2, 3], 1)).toEqual([3, 1, 2]);
		expect(rotateArray([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5, 1, 2]);
	});	
	test("returns an array with correctly changed values when num -ve", () => {
		expect(rotateArray([1, 2, 3], -1)).toEqual([2, 3, 1]);
		expect(rotateArray([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5, 1, 2]);
	});	
});


