describe('Upload de Arquivo', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
    });
  
    it('Deve realizar o upload de um arquivo com sucesso', () => {
      // Visita a página de upload
      cy.visit('https://the-internet.herokuapp.com/upload');
  
      // Define o arquivo que será usado para upload
      const fileName = 'CASOS DE TESTE.pdf';
  
      // Faz o upload do arquivo
      cy.get('input[type="file"]').attachFile('../../CASOS DE TESTES.pdf');
  
      // Clica no botão de upload
      cy.get('#file-submit').click();
  
      // Verifica se a URL contém o caminho esperado após o upload
      cy.url().should('include', '/upload');
  
      // Verifica se a mensagem de sucesso é exibida
      cy.get('h3').should('have.text', 'File Uploaded!');
  
      // Verifica se o nome do arquivo carregado é exibido na página
      cy.get('#uploaded-files').should('contain.text', fileName);
    });
  });
  