/// <reference types = "Cypress" />


describe("Test Ycombinator Hack new site", () =>{
    it("Should be able to open the Y-combinator Website Successfully", () =>{
        cy.visit('https://www.ycombinator.com/')
        cy.get('body > footer.normalwidth:nth-child(3) > nav > ul.clearfix:nth-child(2) > li:nth-child(3) > a').click()
        cy.get('[href="https://news.ycombinator.com"] > figure').click()
    });
    // it("Should NOT be able to open the Y-combinator Website Successfully AS ALL FIELDS ARE REQUIRED", () =>{
    //     //CYPRESS CODE

    // });
})