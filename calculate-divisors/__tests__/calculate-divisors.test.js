const calculateDivisors = require('../calculate-divisors.js');

describe("calculateDivisors function tests", () => {
	test("arg is a number", () => {
		expect(typeof calculateDivisors(6)).toBe("number");
	});	
	test("input 0 returns 0", () => {
		expect(calculateDivisors(0)).toBe(0);
	});	
	test("input 3 returns 3", () => {
		expect(calculateDivisors(3)).toBe(3);
	});	
	test("input 5 returns 8", () => {
		expect(calculateDivisors(5)).toBe(8);
	});	
	test("input 6 returns 14", () => {
		expect(calculateDivisors(6)).toBe(14);
	});	
	test("input 9 returns 23", () => {
		expect(calculateDivisors(9)).toBe(23);
	});
	test("input 10 returns 33", () => {
		expect(calculateDivisors(10)).toBe(33);
	});
	test("input 12 returns 45", () => {
		expect(calculateDivisors(12)).toBe(45);
	});

});
