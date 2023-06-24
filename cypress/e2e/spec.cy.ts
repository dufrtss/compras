describe('Adicionar produtos na solicitação de compra', () => {
  it('Adiciona três produtos na solicitação de compra', () => {
    cy.visit('http://localhost:5173/')

    cy.get("#name").type("Cabo de cobre")

    cy.get("#amount").type("{backspace}10")
    
    cy.contains("Add").click()

    cy.get("#name").type("Carregador usb-c")

    cy.get("#amount").type("{backspace}3")
    
    cy.contains("Add").click()

    cy.get("#name").type("Notebooks")

    cy.get("#amount").type("{backspace}25")
    
    cy.contains("Add").click()
  })
})

describe('Remover um produto na solicitação de compra', () => {
  it('Adiciona e remove um produto na solicitação de compra', () => {
    cy.visit('http://localhost:5173/')

    cy.get("#name").type("Caixa de som")

    cy.get("#amount").type("{backspace}2")
    
    cy.contains("Add").click()

    cy.get("#trash").click()
  })
})