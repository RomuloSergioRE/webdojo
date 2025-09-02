import { faker } from '@faker-js/faker'
import _ from 'lodash'

describe('Cadastro', () => {
    beforeEach(() => {
        cy.goToSignup()
        cy.intercept('POST', 'http://localhost:3333/api/users/register', {
            statusCode: 201,
            body: {
                message: 'usuario cadastrado com sucesso'
            }
        }).as('postSgnup')
    })
    it('Deve cadastrar um novo usuario', () => {

        cy.get('#name').type('romulo')
        cy.get('#email').type('romulo@teste.com.br')
        cy.get('#password').type('romulo123')

        cy.contains('button', 'Criar conta').click()

        // cy.wait('@postSgnup')

        cy.contains('Conta criada com sucesso')
            .should('be.visible')
    })

    _.times(5, () => {
        it.only('Deve cadastrar um novo usuario teste de cargar com o FAKER', () => {

            const name = faker.person.fullName()
            const email = faker.internet.email()
            const password = 'pwd123'

            // cy.log(name)
            // cy.log(email)
            // cy.log(password)

            cy.get('#name').type(name)
            cy.get('#email').type(email)
            cy.get('#password').type(password)

            cy.contains('button', 'Criar conta').click()

            cy.wait('@postSgnup')

            cy.contains('Conta criada com sucesso')
                .should('be.visible')
        });
    })
})