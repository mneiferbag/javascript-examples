describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})

describe('Check home page', () => {
    it('Contains greeting', () => {
        cy.visit('/')
        cy.contains('Hello')
    })
})

describe('Check cart page', () => {
    it('Contains cart', () => {
        cy.visit('/cart')
        cy.contains('My cart')
    })
})
