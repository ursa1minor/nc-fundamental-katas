const herdTheBabies = require('../herd-the-babies/herd-the-babies.js');

describe.only("herdTheBabies function tests", () => {
	test("should return empty string when passed empty string", () => {
		expect(herdTheBabies("")).toBe("");
	});	
	test("should return abcd when passed dcba", () => {
		expect(herdTheBabies("dcba")).toBe("abcd");
	});	
	test("should return Aa when passed aA", () => {
		expect(herdTheBabies("aA")).toBe("Aa");
	});	
	test("should return AaB when passed aBA", () => {
		expect(herdTheBabies("aBA")).toBe("AaB");
	});	
	test("should return AaBbbCcc when passed bbaBccAC", () => {
		expect(herdTheBabies("bbaBccAC")).toBe("AaBbbCcc");
	});	
	test("should return AAaBbbCcc when passed bbaBccACA", () => {
		expect(herdTheBabies("bbaBccACA")).toBe("AAaBbbCcc");
	});	
});
