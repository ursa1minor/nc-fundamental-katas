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


describe("foldString function tests", () => {
	test("returns empty string when passed empty string", () => {
		expect(foldString("")).toBe("");
	});	
	test("returns string when passed string of length 1", () => {
		expect(foldString("a")).toBe("a");
	});	
	test("returns folded string when passed string of length 4", () => {
		expect(foldString("code")).toBe("oced");
	});
	test("returns folded string when passed string of length 5", () => {
		expect(foldString("abcde")).toBe("baced");
	});
	test("returns folded string when passed string of length 6", () => {
		expect(foldString("abcdef")).toBe("cbafed");
	});
	test("returns correctly folded string when passed Northcoders", () => {
		expect(foldString("Northcoders")).toBe("htroNcsredo");
	});
	test("returns correctly folded string when passed string with spaces", () => {
		expect(foldString("javascript is cool")).toBe("savajtpirc is oclo");
	});

});
