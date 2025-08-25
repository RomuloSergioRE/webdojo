describe('Kanban Board',()=>{
    it('Deve mover um tarefa de TODO para DONE e atualizar o board', ()=>{
        cy.login()
        
        cy.goTo('Kanban', 'Kanban Board')

        const dataTransfer = new DataTransfer()

        //click e arraste do item
        cy.contains('div[draggable=true]', 'Documentar API')
            .trigger('dragstart', {dataTransfer})
            
        //soltar o item
        cy.get('.column-done')
            .trigger('drop', {dataTransfer})
            .find('h3')
            .should('have.text', 'Done (4)')
            
        cy.get('.column-done')
            .should('include.text', 'Documentar API')
            .and('include.text', 'Criar documentação da API com Swagger')
    })
})