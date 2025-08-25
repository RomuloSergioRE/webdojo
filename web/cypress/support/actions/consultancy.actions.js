Cypress.Commands.add('fillConsultancyForm', (form)=>{
            
        // campos normais
        //exemplo de localizado se nao tiver o ID (input[placeholder=""])
        cy.get('#name').type(form.name)
        cy.get('#email').type(form.email)

        // verificando se a mask ta funcionando
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type(form.phone)
            //.should('have.value', '(21) 99999-8888')

        // usando o nome do select
        cy.get('#consultancyType').select(form.consultancyType)

        // exemplo se nao tiver o Id
        // cy.contains('label', 'Tipo de Consultoria')
        //     .parent()
        //     .find('select')
        //     .select('In Company')       
        
        if(form.personType === 'cpf'){
            //Botao radio
            cy.contains('span', 'Pessoa Física')
                .parent()
                .find('input')
                .click()
                .should('be.checked')

            cy.contains('span', 'Pessoa Jurídica')
                .parent()
                .find('input')
                .should('be.not.checked')
                // verificando se a mask ta funcionando

            cy.contains('label', 'CPF')
                .parent()
                .find('input')
                .type(form.document)
                //.should('have.value', '466.537.400-72')
        }
        if(form.personType === 'cnpj'){
            //Botao radio
            cy.contains('span', 'Pessoa Jurídica')
                .parent()
                .find('input')
                .click()
                .should('be.checked')

            cy.contains('span', 'Pessoa Física')
                .parent()
                .find('input')
                .should('be.not.checked')
            // verificando se a mask ta funcionando
            cy.contains('label', 'CNPJ')
                .parent()
                .find('input')
                .type(form.document)
                //.should('have.value', '466.537.400-72')
        }


        //checkbox multipla escolha
        
        form.discoveryChannels.forEach((channel) =>{
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })

        //upload do arquivo
        cy.get('input[type="file"]')
            .selectFile(form.file, {force: true})

        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type(form.description)

        // array com tags
        form.techs.forEach((tech)=>{
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')
            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')
        })
        if(form.terms === true){
            cy.contains('label', 'termos de uso')
                .find('input')
                .check()
                .should('be.checked')
        }
})

Cypress.Commands.add('submitConsultancyForm', ()=>{
    cy.contains('button', 'Enviar formulário')
        .click()
})

Cypress.Commands.add('validadeConsultancyModal', ()=>{
     cy.get('.modal', {timeout: 7000})   
        .should('be.visible')     
        .find('.modal-content')
        .should('be.visible')  
        .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')

})