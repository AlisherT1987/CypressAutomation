/// <reference types="cypress" />

describe('Context: My First Tests', () =>{
    before(()=>{
        // runs once before all test cases in this describeblock, like BeforeClass in TestNG
    })
    beforeEach(()=>{
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
    })
    after(()=>{
        //similar to afterClass in TestNG, runs once after all test cases
    })
    afterEach(()=>{
        //similar to afterMethod in TestNG
    })
    it.skip('Opening a web application',()=>{
        cy.visit('/registration_form');
    })
    xit('Test 2',()=>{
        expect(false).to.equal(false);
    })
    it('Test 3',()=>{
        expect(false).not.to.equal(true);
    })
    it('Test 4',()=>{
        expect(5).to.equal(5);
    })
    it('Test 5',()=>{
        expect(true).to.equal('5'==5);
    })
})