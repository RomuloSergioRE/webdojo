describe('github',()=>{
     beforeEach(()=>{
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    })
    it('Deve cadastrar um novo perfil do github', ()=>{

        cy.get('#name').type('romulo')
        cy.get('#username').type('romulosergio')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.get('#name').type('romulo')
        cy.get('#username').type('RomuloSergioRE')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', 'RomuloSergioRE')
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .contains('table tbody tr', 'romulo')
            .should('be.visible')

        cy.get('@trProfile')
            .contains('table tbody tr', 'QA')
            .should('be.visible') 
    })
    it('Deve poder remover um perfil do github', ()=>{

        const profile ={
            name: 'romulo',
            username: 'romulosergio123',
            profile:'QA'
        }


        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.profile)


        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .find('button[title="Remover perfil"]')
            .click()

        cy.contains('table tbody', profile.username)
            .should('not.exist')
    })
    it('Deve validar o link do github', ()=>{

        const profile ={
            name: 'romulo',
            username: 'RomuloSergioRE',
            profile:'QA'
        }


        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.profile)


        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .find('a')
            .should('have.attr', 'href', 'https://github.com/' + profile.username)
            .and('have.attr', 'target', '_blank')
            

        
    })
})