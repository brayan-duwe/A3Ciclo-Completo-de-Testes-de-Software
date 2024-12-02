describe('template spec', () => {
    it('passes', () => {
      // Acessando o site e abrindo a página para realizar os testes com Checkboxes
      cy.visit('https://the-internet.herokuapp.com/');
      cy.get(':nth-child(6) > a').click();
  
      // Confirmando se o checkbox 1 está desmarcado e o checkbox 2 marcado
      cy.get('#checkboxes > :nth-child(1)').should('not.be.checked');
      cy.get('[checked=""]').should('be.checked');
  
      // Marca o checkbox 1, desmarcar o checkbox 2 e confirma se gravou a informação
      cy.get('#checkboxes > :nth-child(1)').click();
      cy.get('#checkboxes > :nth-child(3)').click();
      cy.get('[checked=""]').should('be.checked');
      cy.get('#checkboxes > :nth-child(3)').should('not.be.checked');
  
      // Marca todos os checkbox e confirma se gravou a informação
      cy.get('#checkboxes > :nth-child(3)').click();
      cy.get('#checkboxes > :nth-child(1)').should('be.checked');
      cy.get('#checkboxes > :nth-child(3)').should('be.checked');
  
      // Desmarca todos os checkbox e confirma se gravou a informação
      cy.get('#checkboxes > :nth-child(1)').click();
      cy.get('#checkboxes > :nth-child(3)').click();
      cy.get('#checkboxes > :nth-child(1)').should('not.be.checked');
      cy.get('#checkboxes > :nth-child(3)').should('not.be.checked');
  
      // Sai da aba e volta para confirmar se a configuração padrão foi restaurada
      cy.go('back');
      cy.reload();
      cy.get(':nth-child(6) > a').click();
      cy.get('#checkboxes > :nth-child(1)').should('not.be.checked');
      cy.get('[checked=""]').should('be.checked');
      
      cy.log('Teste finalizado!');
      
    });
  });  