describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/games", {
      fixture: "gamesIndexResponse.json",
      statusCode: 200,
    });
    cy.intercept("POST", "**/api/games", {
      fixture: "gamesIndexScrapedResponse.json",
      statusCode: 201,
    });
    cy.visit("/");
  });

  it("is expected to display a button to run scraper", () => {
    cy.get("[data-cy=scraper-btn]").should("be.visible");
  });

  it('is expected to update the games displayed once clicked', () => {
    cy.get("[data-cy=scraper-btn]").click()
    cy.get("[data-cy=games-table]").children().should("have.length", 181);
  });
});
