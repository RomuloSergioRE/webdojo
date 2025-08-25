import { getTodayDate }  from  '../support/utils.js';

describe('Login', ()=>{

  it('Deve logar com sucesso', ()=>{ 
    cy.start()

    cy.submitLogin('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

    cy.getCookie('login_date').should('exist')

    cy.getCookie('login_date').should((cookie)=>{
      expect(cookie.value).to.eq(getTodayDate())
    })

    cy.window().then((win)=>{
      const token = win.localStorage.getItem('token')
      expect(token).to.match(/^[a-f0-9]{32}$/i)
    })
  })

  it('Nao deve logar com senha invalida', ()=>{
    cy.start()

    cy.submitLogin('papito@webdojo.com', 'katana123444')

    cy.contains('Acesso negado! Tente novamente')
        .should('be.visible')
  })

  it('Nao deve logar com email invalida', ()=>{
    cy.start()
  cy.submitLogin('papito@webdojo.com', 'katana12223')
    cy.contains('Acesso negado! Tente novamente')
      .should('be.visible')
  })
})