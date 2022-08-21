const herdTheBabies = require('../herd-the-babies/herd-the-babies.js');

describe("herdTheBabies function tests", () => {
	test.only("should return empty string when passed empty string", () => {
		expect(herdTheBabies("")).toBe("");
	});	
	test.only("should return Aa when passed aA", () => {
		expect(herdTheBabies("aA")).toBe("Aa");
	});	
});
