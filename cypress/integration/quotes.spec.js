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
})