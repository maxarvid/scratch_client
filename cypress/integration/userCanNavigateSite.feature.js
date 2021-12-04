describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to render a header", () => {
    cy.get("[data-cy=title]").should("contain", "Maine Scratch");
  });

  it.only('is expected to display games and their attributes', () => {
    cy.get("[data-cy=games-table]").should("be.visible")
  });
});
