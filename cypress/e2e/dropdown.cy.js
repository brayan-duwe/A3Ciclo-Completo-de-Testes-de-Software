describe('template spec', () => {
  it('passes', () => {
    // Acessando o site
    cy.visit('https://the-internet.herokuapp.com/');

    // Abrindo a página para realizar os testes com Dropdown
    cy.get(':nth-child(11) > a').click();

    // Selecionando uma opção de cada vez e confirmando a gravação
    cy.get('#dropdown').select('Option 1');
    cy.get('#dropdown').should('have.value', '1');

    cy.get('#dropdown').select('Option 2');
    cy.get('#dropdown').should('have.value', '2');

    // Saindo da aba e voltando para confirmar se é possivel gravar uma nova opção
    cy.go('back');
    cy.reload();
    cy.get(':nth-child(11) > a').click();
    cy.get('#dropdown').should('be.visible');
    cy.get('#dropdown').select('Option 2');
    cy.get('#dropdown').should('have.value', '2');

    cy.log('Teste finalizado!');
  });
});