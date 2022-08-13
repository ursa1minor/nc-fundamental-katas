const tillAddition = require('../till-addition/till-addition.js');

describe("tillAddition function tests", () => {
	test("function returns a string", () => {
		expect(typeof tillAddition()).toBe("string");
	});	
	test("function returns correct result when passed 2 coin values", () => {
		expect(tillAddition({ "1p": 1, "2p": 1 })).toBe("£0.03");
	});	
	test("function returns correct result when passed 5 coin values", () => {
		expect(tillAddition({ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 })).toBe("£0.38");
	});	
	test("function returns correct result when passed coin and note values", () => {
		expect(tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 })).toBe("£1.85");
	});
	test("function returns correct result when passed higher coin and note values", () => {
		expect(tillAddition({ "5p": 1, "10p": 1, "20p": 2, "50p": 2, "£1": 3, "£20": 1 })).toBe("£24.55");
	});
});
