describe('Autenticação Básica', () => {
  
    it('Deve autenticar com credenciais válidas', () => {
      // Usa cy.request() para autenticar com credenciais válidas (admin/admin)
      cy.request({
        method: 'GET',
        url: 'https://the-internet.herokuapp.com/basic_auth',
        auth: {
          username: 'admin',   // Credenciais válidas
          password: 'admin'
        },
        failOnStatusCode: false // Permite que o teste continue mesmo com status 401
      }).then((response) => {
        // Verifica se a resposta foi bem-sucedida (200 OK)
        expect(response.status).to.eq(200);  // Espera 200 para credenciais válidas
      });
  
      // Agora, usa a URL com as credenciais embutidas para garantir a autenticação
      cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth', {
        failOnStatusCode: false // Não falha em caso de 401 (será verificado depois)
      });
  
      // Verifica se a URL correta foi carregada
      cy.url().should('include', '/basic_auth');
  
      // Verifica se a mensagem de sucesso está visível na página
      cy.contains('Congratulations!').should('be.visible');
    });
  
    it('Deve exibir erro com credenciais inválidas', () => {
      // Usa cy.request() com credenciais inválidas e espera o status 401
      cy.request({
        method: 'GET',
        url: 'https://the-internet.herokuapp.com/basic_auth',
        auth: {
          username: 'foo',    // Credenciais inválidas
          password: 'bar'
        },
        failOnStatusCode: false // Não falha no status 401
      }).then((response) => {
        // Verifica se o status é 401
        expect(response.status).to.eq(401);
        // Verifica se o corpo contém a mensagem 'Not authorized'
        expect(response.body).to.include('Not authorized');
      });
    });
  
  });
  