"use strict";

const chai = window.chai;
const expect = chai.expect;

/***************************************************************************************
 describe('yourFunctionName', () =>  {
    it('please enter your function description here',  () => {
        expect(yourFunctionName(parameters)).to.deep.equal(expected_result);
    })
})
 ***************************************************************************************/

describe('_findNumOfDigits(str)', () =>  {
    it('this function determines the number if digits in source argument',  () => {
        expect(_findNumOfDigits(1000)).to.deep.equal(4);
        expect(_findNumOfDigits("abcd")).to.deep.equal(0);
        expect(_findNumOfDigits(12)).to.deep.equal(2);
        expect(_findNumOfDigits("COMP1235")).to.deep.equal(4);
        expect(_findNumOfDigits("C1O2M3P5")).to.deep.equal(1);
    })
})

describe('_surplus(str)', () =>  {
    it('this function returns a function (inner in this case) that returns the source string (string argument)',  () => {
        expect(_surplus("orange")("inner")).to.deep.equal("orange");
        expect(_surplus("pear")("inner")).to.deep.equal("pear");
        expect(_surplus("")("inner")).to.deep.equal("");
    })
})

describe('_strNumbers(str)', () =>  {
    it('this returns new array, containing only the elements from the source that has numbers in them',  () => {
        expect(_strNumbers(["1a", "a", "2b", "b"])).to.deep.equal(["1a", "2b"]);
        expect(_strNumbers(["abc", "abc10"])).to.deep.equal(["abc10"]);
        expect(_strNumbers(["abc", "ab10c", "a10bc", "bcd"])).to.deep.equal(["ab10c", "a10bc"]);
        expect(_strNumbers(["this is a test", "test1"])).to.deep.equal(["test1"]);
        expect(_strNumbers([])).to.deep.equal([]);
        expect(_strNumbers(["this is a test"])).to.deep.equal([]);
    })
})

describe('_determineClassGrading()', () =>  {
    it('function transverses an array to determine the number of passing and failing grades',  () => {
        expect(_determineClassGrading([50, 51, 80, 45])).to.deep.equal([3, 1, 56.5]);
        expect(_determineClassGrading([35, 45, 25, 10, 6, 33])).to.deep.equal([0, 6, 25.7]);
        expect(_determineClassGrading([80, 90])).to.deep.equal([2, 0, 85.0]);
    })
})

describe('_moveCapitalLetters', () =>  {
    it('This function moves all capital letters to the front of a word.',  () => {
        expect(_moveCapitalLetters("hApPy")).to.deep.equal("APhpy")
        expect(_moveCapitalLetters("moveMENT")).to.deep.equal("MENTmove")
        expect(_moveCapitalLetters("shOrtCAKE")).to.deep.equal("OCAKEshrt")
    })
})