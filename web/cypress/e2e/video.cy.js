describe('Tocar o video',()=>{
    
    it('Deve poder tocar o video', ()=>{
        cy.login()
        
        cy.goTo('Video', 'Video')

        cy.wait(3000)

        //its obter prorpiedades de elementos, obejtos ao testa apis, cookie, local store
        cy.get('iframe[title="Video Player"]')
            .should('exist')        
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .as('iFramePlayer')

        cy.get('@iFramePlayer',)
            .find('.play-button')
            .click()

        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')
    })
})