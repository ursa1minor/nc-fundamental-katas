const changeCalculator = require("../change-calculator/change-calculator.js");


//changeCalculator(1);
// should return {'1':1}

//changeCalculator(2);
// should return {'2':1}

//changeCalculator(7);
// should return {'5':1,'2':1}

//changeCalculator(13);
// should return {'10':1,'2':1,'1':1}

describe("changeCalculator function tests", () => {
	test("should return an object", () => {
		const testCalc = changeCalculator;
		expect(typeof testCalc(0)).toBe('object');
	});	
	test("should return {} when passed 0}", () => {
		const testCalc = changeCalculator;
		expect(testCalc(0)).toEqual({});
	});	
    test("should return object with one key pair when passed 1", () => {
		const testCalc = changeCalculator;
		expect(testCalc(1)).toEqual({'1': 1});
	});	
	test('should return correct data when passed 2', () => {
		const testCalc = changeCalculator;
		expect(testCalc(2)).toEqual({'2': 1});		
	});

});
