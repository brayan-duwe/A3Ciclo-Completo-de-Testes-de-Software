describe('Javascript Alerts', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  });

  it('Alerta JS', () => {
    cy.get(':nth-child(1) > button').click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('I am a JS Alert');
    });
    cy.get('#result').should('have.text', 'You successfully clicked an alert');
  });

  it('Alerta de Confirmação', () => {
    cy.get(':nth-child(2) > button').click();
    cy.on('window:confirm', (text) => {
      expect(text).to.equal('I am a JS Confirm');
      return true; // Simula o clique em "OK"
    });
    cy.get('#result').should('have.text', 'You clicked: Ok');
  });

  it('Alerta de Prompt', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Teste Cypress');
      cy.get(':nth-child(3) > button').click();
    });
    cy.get('#result').should('have.text', 'You entered: Teste Cypress');
  });
});
