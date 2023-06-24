describe('Teste Solicitação de compra', () => {
  it('Adiciona um elemento na solicitação de compra', () => {
    cy.visit('http://localhost:5173/')

    cy.get("#name").type("Cabo de cobre")

    cy.get("#amount").type("10")
    
    cy.contains("Add").click()

    cy.get("#productTable").should("contain", "Cabo de rede").find("#trash").click()

    cy.get("#name").type("Carregador usb-c")

    cy.get("#amount").type("3")
    
    cy.contains("Add").click()
  })
})