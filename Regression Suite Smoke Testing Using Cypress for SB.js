describe("Regression Suite Smoke Tests", () => {

    beforeEach("Login and Navigate to Scenario Builder", () => {
        cy.visit("https://URL ");

        cy.get("input[id=UserName]").clear();

        cy.get("input[id=Password]").clear();

        cy.get("input[id=UserName]").type("cgadmin");

        cy.get("input[id=Password]").type("cartegraph");

        cy.get("button:contains('Sign In')").click();

        cy.get("div.cgNavigation[id=admin-icon]").click();

        cy.contains("Scenario Builder").click({ force: true });

        cy.get("a.view-link.frozen-button.cgNavigation").first(5).click({ force: true });

        cy.get("div.label.cgNavigation").first().click();

    });

    it("91364 Test that the export icon is clickable and opens the export to work dialog box", () => {
    cy.get("cds-icon-button").first().click();

    }); 

    it("91370 Verify that info icon button opens legend when clicked",()=>{
    cy.get("svg.map-legend__info-icon").click( {force: true});   
    }); 

    it("91374: Verify Scenario can be rerun by clicking on run scenario button", () => {
        cy.get("div.scenario-button-bar__button-text").click({ force: true });

    });

        it("90894 Verify a new 'View' pane is added to the Scenario Sidebar", () => {
            if (cy.contains("By Activity")) {
                cy.contains("By Activity").click();
            }
            cy.contains("By Plan Year").click();
            cy.get("div.scenario-map-sidebar-tabs__header-column").contains("View").click();
        });

        it("90894 90899 Verify new search box that functions", () => {
            cy.get("div.scenario-map-sidebar-tabs__header-column").last().click();
            cy.get("input.scenario-search-box__input").type("a");
            cy.get("tr.scenario-filter-pane__project-row").should("be.visible");
            cy.get("input.scenario-search-box__input").type("b");
            cy.get("tr.scenario-filter-pane__project-row").should("not.be.visible");
        });

        it("90900 'View' pane should only be active in Plan Year Mode.", () => {
            if (cy.contains("By Plan Year")) {
                cy.contains("By Plan Year").click();
            }
            cy.contains("By Activity").click();
            cy.get("div.scenario-map-sidebar-tabs__header-column").contains("View").should("not.be.visible");
        });

        it("90363 Test that the print icon is clickable and opens the print screen tab", () => {
            cy.wait(5000);
            cy.get("cds-icon-button.scenario-toolbar__print-map-icon").click();
            cy.get("div.btnSave").click();
        });

        it("91365 Test that an item can be selected within the 'Convert to Work' Dialog Box", () => {
            cy.get("cds-icon-button").first().click();
            cy.wait(1000);
            cy.get("tr.scenario-convert-projects-dialog__project-row").last().click();
        });

        it("91367 Verify that outline toggle can be turned on", () => {
            cy.wait(2000);
            cy.get("toggle-switch.pendo-outline-toggle").click();
        });

        it("91368 Verify that highlight toggle can be turned on", () => {
            cy.wait(2000);
            cy.get("toggle-switch.pendo-highlight-toggle").click();
        });

        it("91369 Verify that OCI toggle can be turned on", () => {
            cy.wait(2000);
            cy.get("toggle-switch.pendo-oci-toggle").click();
        });

        it("91371 Verify that zoom out icon button functions when clicked", () => {
            cy.wait(10000);
            cy.get("div.esriSimpleSliderDecrementButton").click();
        });

        it("91372 Verify that zoom in button functions when clicked", () => {
            cy.wait(10000);
            cy.get("div.esriSimpleSliderIncrementButton").click();
        });

        it("91375 Check hover text print button", () => {
            cy.get("cds-icon-button.scenario-toolbar__print-map-icon[title|='Print Map']");
        });

    });

