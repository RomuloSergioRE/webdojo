import { faker } from '@faker-js/faker'
import _ from 'lodash'

describe('Expert', () => {
    beforeEach(() => {
        cy.start()

    })

    it('Deve monipular os atributos de elementos do HTML', () => {
        cy.get('#email')
            .invoke('val', 'papito@teste.com.br')

        cy.get('#password')
            .invoke('attr', 'type', 'text')
            .type('senha123')

        cy.contains('button', 'Entrar')
            .click()
    })
    it('Nao deve logar com senha invalida', () => {

        cy.get('#email')
            .type('papito@webdojo.com')

        cy.get('#password')
            .type('kataaana123{Enter}')
        // cy.wait(2500)

        // cy.document().then((doc)=>{
        //     cy.writeFile('cypress/dowloads/page.html', doc.documentElement.outerHTML)
        // })

        cy.get('[data-sonner-toaster="true"] div[class=title]')
            .as('toast')

        cy.get('@toast')
            .should('be.visible')
            .should('have.text', 'Acesso negado! Tente novamente.')

        cy.wait(5000)

        cy.get('@toast')
            .should('be.not.exist')

    })
    it('Simulando a tecla TAb', () => {

        cy.get('body').press('Tab')

        cy.focused().should('have.attr', 'id', 'email')

        cy.get('#email').press('Tab')

        cy.focused().should('have.attr', 'id', 'password')
    })

    it.only('Deve realizar uma carga de dados Fakes', () => {

        _.times(5, () => {

            const name = faker.person.fullName()
            const email = faker.internet.email()
            const password = 'pwd123'

            cy.log(name)
            cy.log(email)
            cy.log(password)
        })
    })
})