describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/games", {
      fixture: "gamesIndexResponse.json",
      statusCode: 200,
    });
    cy.visit("/");
  });

  it("is expected to render a header", () => {
    cy.get("[data-cy=title]").should("contain", "Maine Scratch");
  });

  it("is expected to display games and their attributes", () => {
    cy.get("[data-cy=games-table]").should("be.visible");
  });

  it.only("is expected to render the two games from the fixture file", () => {
    cy.get("[data-cy=games-table]").children().should("have.length", 2);
  });
});
