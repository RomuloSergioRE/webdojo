import consultancyData from '../fixtures/consultancy.json';
describe('Formulario de consultoria', () =>{

    beforeEach(()=>{
        cy.login()
        //clica no button formulario e verifica o titulo com o nome consultoria
        cy.goTo('Formulário', 'Consultoria')
    })
    it('Deve solicitar consultoria individual',()=>{

        const consultancyForm = consultancyData.personal
        
        cy.fillConsultancyForm(consultancyForm)

        cy.submitConsultancyForm()

        cy.validadeConsultancyModal()
    })
    it('Deve solicitar consultoria In Company',()=>{

        const consultancyForm = consultancyData.company
        
        cy.fillConsultancyForm(consultancyForm)

        cy.submitConsultancyForm()

        cy.validadeConsultancyModal()
    })
    it('Deve verificar os campos obrigatorios', ()=>{

        cy.submitConsultancyForm()

        const requireFields = [
            {label: 'Nome Completo', message: 'Campo obrigatório'},
            {label: 'Email', message: 'Campo obrigatório'},
            {label: 'termos de uso', message: 'Você precisa aceitar os termos de uso'}
        ]
        requireFields.forEach((field)=>{
            cy.contains('label', field.label)
                .parent()
                .find('p')
                .should('be.visible')
                .should('have.text', field.message)
                .and('have.class', 'text-red-400')
                .and('have.css', 'color','rgb(248, 113, 113)')
        })
    })
})

