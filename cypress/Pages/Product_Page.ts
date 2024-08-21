export class product_page {

    /*
    Common Locators and funtions
    */

    Navigate(URL: string) {
        cy.visit(URL)
    }


    registerButton() {
        cy.get('.accountTrigger-root-14j > .accountRegistrationTrigger-root-11x').click();
    }
    EnterFirstName() {
        cy.get('#create_account_modal_firstname').type("Thisumi");
    }

    EnterLastName() {
        cy.get('#create_account_modal_lastname').type("Siriwardhana");
    }


    EnterUniqeEmail() {
        const uniqueEmail = `user_${Date.now()}@example.com`;
        cy.get('#create_account_modal_email')
            .clear()
            .type(uniqueEmail);
    }

    EnterUserPassword() {
        cy.get('#create_account_modal_password').type("Thisu@1994");
    }

    ClickOnRegisterBtn() {
        cy.get('.button-root_highPriority-2iR > .button-content-7Hl').click();
    }


    LoginBtn() {
        cy.get('.accountTrigger-root-14j > .accountTrigger-trigger-1zu > .accountChip-root-32x > .accountTrigger-triggerText-1Mu')
            .click();
    }

    LoginEmail() {
        cy.get('#sign_in_modal_email').type("thisumin94@gmail.com");
    }

    LoginPassword() {
        cy.get('#sign_in_modal_password').type("Thisu@1994");
    }
    SignInBtn() {
        cy.get('.button-root_highPriority-2iR > .button-content-7Hl').click();
    }

    ProductSerchTextBox() {
        cy.get('.algoliaSearchBox-input-1IL').type("Early Reader - Arabic Part 1");
    }

    SearchButtonClick() {
        cy.get('.algoliaSearchBox-submit-3Vv').click();
    }

    ClickOnProduct() {
        cy.get(':nth-child(1) > .item-images-3BW > .image-container-3-9 > picture > .item-image-2tX').click();
    }

    ClickAddToButton() {
        cy.xpath("//span[text() = 'Add to bag']").click({ force: true });
    }

    ClickOnViewButton() {
        cy.xpath("//a[text() = 'View Bag']").click({ force: true });
    }

    AddFiveQty() {
        cy.xpath("//div//div/div//ul//div[2]/div/form/div//span/input").clear();
        cy.wait(2000);
        cy.xpath("//div//div/div//ul//div[2]/div/form/div//span/input").type("5");
    }

    ProceedToCheckOut() {
        cy.get('.proceedToCheckoutBtn-content-1kx').click({ force: true });
    }

    ClickOnAddCart() {
        cy.get('.cartTrigger-root-2e_').click({ force: true });
    }

    ProductRemove() {
        cy.get('.product-removeItem-2gC').click({ force: true });
    }



}