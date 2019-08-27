describe("description of the test", () => {

   
    beforeEach("Login and Navigate to Scenario Builder", () => {
        cy.visit("https://geminiweb.cartegraph.com/SpaghettiNation");

        cy.get("input[id=UserName]").clear(); 

        cy.get("input[id=Password]").clear();

        cy.get("input[id=UserName]").type("cgadmin");

        cy.get("input[id=Password]").type("cartegraph");

        cy.get("button:contains('Sign In')").click();

        cy.get("div.cgNavigation[id=admin-icon]").click();

        cy.contains("Scenario Builder").click({ force: true });


        });
    it("90894 Verify a new 'View' pane is added to the Scenario Sidebar", () => {
        cy.get("a.view-link.frozen-button.cgNavigation").first(5).click({ force: true });
    });
});






   

    