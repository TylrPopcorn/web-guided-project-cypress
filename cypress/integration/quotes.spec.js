// write tests here
describe("Quotes App", () => {
  // Each test needs "fresh" state!!
  // Tests should never rely on state left over from other tests
  // Every test must be able to work in isolation
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  })

  // Helpers to consolidate our getters...

  const textInput = () => cy.get("input[name=text]");
  const authorInput = () => cy.get("input[name=author]");
  const foobarInput = () => cy.get("input[name=foobar]");
  const submitBtn = () => cy.get(`button[id="submitBtn"]`);
  const cancelBtn = () => cy.get(`button[id="cancelBtn"]`);

  it("sanity check to make sure tests work", () => {
    // "it" is a test
    // "expect" is an assertion
    // There can be multiple assertions per test,
    // but they all need to relate to the "one thing" we're testing
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5); // strict => ===
    expect({}).not.to.equal({}); // TRUE
    expect({}).to.eql({}); // TRUE loose => ==
  })

  it("the proper elements are showing", () => {
    textInput().should("exist");
    authorInput().should("exist");
    foobarInput().should("not.exist");
    submitBtn().should("exist");
    cancelBtn().should("exist");

    cy.contains("Submit Quote").should("exist");
    cy.contains(/submit quote/i).should("exist");
  })

  describe("Filling out the inputs and cancelling", () => {
    // We can use optional "describe" blocks to organize / group our tests
    it("can navigate to the site", () => {
      cy.url().should("include", "localhost");
    })

    it("submit button starts out disabled", () => {
      submitBtn().should("be.disabled");
    })

    it("can type in the inputs", () => {
      textInput()
        .should("have.value", "")
        .type("CSS is the BEST")
        .should("have.value", "CSS is the BEST");
      authorInput()
        .should("have.value", "")
        .type("CRHarding")
        .should("have.value", "CRHarding");
    })

    it("the submit button enables when both inputs are filled out", () => {
      authorInput().type("Casey");
      textInput().type("Lorem ipsum");
      submitBtn().should("not.be.disabled");
    })

    it("the cancel button resets the inputs and the submit button ends up disabled", () => {
      authorInput().type("Casey");
      textInput().type("But my code is perrrrrrrfect!");
      cancelBtn().click();
      textInput().should("have.value", "");
      authorInput().should("have.value", "");
      submitBtn().should("be.disabled");
    })
  })
})