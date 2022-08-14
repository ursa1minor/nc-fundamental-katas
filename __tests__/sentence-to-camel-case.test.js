const sentenceToCamelCase = require('../sentence-to-camel-case/sentence-to-camel-case.js');

// sentenceToCamelCase("this sentence", true);
// should return "ThisSentence"

// sentenceToCamelCase("this sentence", false);
// should return "thisSentence"

//sentenceToCamelCase("This Bigger strange Sentence", true);
// should return "ThisBiggerStrangeSentence"

describe("sentenceToCamelCase function tests", () => {
	test("", () => {
		expect(typeof sentenceToCamelCase(" ")).toBe("string");
	});	
	test("", () => {
		expect(sentenceToCamelCase("this sentence", true)).toBe("ThisSentence");
	});	
	test("", () => {
		expect(sentenceToCamelCase("this sentence", false)).toBe("thisSentence");
	});	
	test("", () => {
		expect(sentenceToCamelCase("This Bigger strange Sentence", true)).toBe("ThisBiggerStrangeSentence");
	});	
});
