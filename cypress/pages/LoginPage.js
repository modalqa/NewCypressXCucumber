class LoginPage {
  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button"),
    errorMessage: () => cy.get('h3[data-test="error"]'),
    selectItems: () => cy.get(".inventory_item_name").contains("Sauce Labs Backpack"),
    Items: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    clickCart: () => cy.get('.shopping_cart_link'),
    clickCheckout: ()=> cy.get('[data-test="checkout"]'),
    firstNameInput: () => cy.get("#first-name"),
    lastNameInput: () => cy.get("#last-name"),
    postalcodeInput: () => cy.get("#postal-code"),
    clickContinue: () => cy.get("#continue"),
    verifPrice:()=> cy.get(".summary_subtotal_label"),
    clickFinish: () => cy.get("#finish"),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  addItems(){
    this.elements.selectItems().click();
    this.elements.Items().click()
  }

  checkoutProces(){
    this.elements.clickCart().click();
    this.elements.clickCheckout().click();

  }
  inputFormCheckout(){
    this.elements.firstNameInput().type("Faris");
    this.elements.lastNameInput().type("Kurnia");
    this.elements.postalcodeInput().type("10640");
    this.elements.clickContinue().click();
    this.elements.verifPrice().contains("29.99");
    this.elements.clickFinish().click();
  }
}

export const loginPage = new LoginPage();
