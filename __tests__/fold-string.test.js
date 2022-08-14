const foldString = require('../fold-strings/fold-string.js');

//foldString("code");
// should return  'oced'

//foldString("abcdef");
// should return  'cbafed';

//foldString("javascript");
// should return  'savajtpirc'

//foldString("Northcoders");
// should return 'htroNcsredo'

//foldString("javascript is cool");
// should return  'savajtpirc is oclo'


describe("sentenceToCamelCase function tests", () => {
	test("returns empty string when passed empty string", () => {
		expect(foldString(" ")).toBe(" ");
	});	
	test("returns string when passed string of length 1", () => {
		expect(foldString("a")).toBe("a");
	});	

});
