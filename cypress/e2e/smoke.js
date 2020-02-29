describe("app", () => {
  it("loads the home page", () => {
    cy.visit("/")
      .findByText(/about/i)
      .click()
      //   confirm the text exists
      .findByText(/Hi from the second page/i)
  })
})
