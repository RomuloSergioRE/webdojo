describe('Validaçõe de alertas em js',()=>{
    beforeEach(()=>{
        cy.login()
        cy.goTo('Alertas JS', 'JavaScript Alerts')
    })
    it('Deve validar a mensagem de alerta box', ()=>{
        cy.on('window:alert', (msg)=>{
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!')
        })

        cy.contains('button', 'Mostrar Alert').click()
    })
    it('Deve confirmar um diaglogo e validar a resposta positiva', ()=>{

        cy.on('window:confirm', (msg)=>{
            expect(msg).to.equal('Aperte um botão!')
            // simula o botao OK
            return true
        })
        cy.on('window:alert', (msg)=>{
            expect(msg).to.equal('Você clicou em Ok!')
        })

        cy.contains('button', 'Mostrar Confirm').click()
    })
    it('Deve cancelar um diaglogo e validar a resposta negativa', ()=>{

        cy.on('window:confirm', (msg)=>{
            expect(msg).to.equal('Aperte um botão!')
            // simula o botao CANCELAR
            return false
        })
        cy.on('window:alert', (msg)=>{
            expect(msg).to.equal('Você cancelou!')
        })


        cy.contains('button', 'Mostrar Confirm').click()
    })

    it('Deve interagir com um prompt, inserir um texto e validar uma mensagem', ()=>{

        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('romulo')
        })
        cy.on('window:alert', (msg)=>{
            expect(msg).to.equal('Olá romulo! Boas-vindas ao WebDojo!')
        })

        cy.contains('button', 'Mostrar Prompt').click()
    })
})