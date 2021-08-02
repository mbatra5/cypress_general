class  Homepage
{
    getEditBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding()
    {
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getGender()
    {
        return cy.get('select')
    }

    getEntreprenaur()
    {
        return cy.get('#inlineRadio3')
    }

    getShopTab()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }

    getCheckoutButton()
    {
        return cy.contains('Checkout')
    }
}

export default Homepage;