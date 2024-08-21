import { product_page } from "../Pages/Product_Page"; // Import LoginPage class from login_page module


/// <reference types="cypress" />
const ProductPage = new product_page();

describe('Vist the MumsWorld Web store', () => {
  beforeEach(() => {
    cy.visit('https://www.mumzworld.com/');
  });

  it('TC01 Register a new user', () => {
    /* Open the Mumzworld Webstore and register as a new user  */
    ProductPage.registerButton();
    ProductPage.EnterFirstName();
    ProductPage.EnterLastName();
    ProductPage.EnterUniqeEmail();
    ProductPage.EnterUserPassword();
    ProductPage.ClickOnRegisterBtn();
  })

  it('TC02 Open the MumzWorld Webstore', () => {
    /* Open the Mumzworld Webstore and login */

    ProductPage.LoginBtn();
    ProductPage.LoginEmail();
    ProductPage.LoginPassword();
    ProductPage.SignInBtn();
  })

  it('TC03 Search a product', () => {

    /*Login to the website*/
    ProductPage.LoginBtn();
    ProductPage.LoginEmail();
    ProductPage.LoginPassword();
    ProductPage.SignInBtn();

    /*search Product*/
    ProductPage.ProductSerchTextBox();
    ProductPage.SearchButtonClick();
    ProductPage.ClickOnProduct();
  })

  it('TC04 Add the product to bag ,Go to view bag page , Increase qty to be 5 items,Click Proceed to checkout funtionalities', { retries: 1 }, () => {

    /*Login to the website*/
    ProductPage.LoginBtn();
    ProductPage.LoginEmail();
    ProductPage.LoginPassword();
    ProductPage.SignInBtn();
    cy.wait(2000);

    /*Searh a product*/
    ProductPage.ProductSerchTextBox();
    ProductPage.SearchButtonClick();
    ProductPage.ClickOnProduct();
    cy.wait(1000);

    /*Add to Bag*/
    ProductPage.ClickAddToButton();
    cy.wait(2000);

    /*View Bag*/
    ProductPage.ClickOnViewButton();
    cy.wait(3000);

    /*Increase qty to be 5 items*/
    ProductPage.AddFiveQty();

    /*Click Proceed to checkout*/
    ProductPage.ProceedToCheckOut();


  })
  it('TC04 Post condition', () => {
    /* Remove the item from the bag*/
    ProductPage.LoginBtn();
    ProductPage.LoginEmail();
    ProductPage.LoginPassword();
    ProductPage.SignInBtn();
    ProductPage.ClickOnAddCart();
    cy.wait(2000);
    ProductPage.ProductRemove();


  });
});