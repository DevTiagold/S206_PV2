describe("Casos de teste para o site sauucedemo.com", () => {
  it("Teste 1 --> Login Válido com user/password forncedio pelo site", () => {
    loginSite();
  });

  it("Teste 2 --> Login Inválido com user/password inválidos", () => {
    loginSite_error();
  });

  it("Teste 3 --> Realizando compra de um produto", () => {
    //Fazendo o login
    loginSite();

    //adicionando mochila ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    //Navegando até o carrinho
    cy.get('[data-test="shopping-cart-link"]').click();

    //prosseguindo com a compra
    cy.get('[data-test="checkout"]').click();

    //Adicionando as informações do comprador
    let infos_comprador = infos_compra();

    //Inserindo os dados do comprador
    cy.get('[data-test="firstName"]').type(infos_comprador[0]);
    cy.get('[data-test="lastName"]').type(infos_comprador[1]);
    cy.get('[data-test="postalCode"]').type(infos_comprador[2]);

    //Prosseguindo com a compra
    cy.get('[data-test="continue"]').click();

    //Finalizando a compra
    cy.get('[data-test="finish"]').click();

    // Status da compra
    cy.get('[data-test="title"]').should(
      "have.text", "Checkout: Complete!");

  });
});

function loginSite() {
  //Nome do usuário (fixo)
  let nome = "standard_user";

  //Senha do usuário (fixa)
  let senha = "secret_sauce";

  //Colocando em uma lista infos_login
  let infos_login = [nome, senha];

  //Fazendo o teste do Login
  cy.visit("https://www.saucedemo.com/");

  //Adicionando o nome de usuário e a senha
  cy.get('[data-test="username"]').type(nome);
  cy.get('[data-test="password"]').type(senha);
  //Clicando para no botão
  cy.get('[data-test="login-button"]').click();
  //Retornando a informação
  return infos_login;
}

function loginSite_error() {
  //Nome do usuário (fixo)
  let nome = "standard_user_invalid";

  //Senha do usuário (fixa)
  let senha = "secret_sauce_invalid";

  //Colocando em uma lista infos_login
  let infos_login = [nome, senha];

  //Fazendo o teste do Login
  cy.visit("https://www.saucedemo.com/");

  //Adicionando o nome de usuário e a senha
  cy.get('[data-test="username"]').type(nome);
  cy.get('[data-test="password"]').type(senha);
  //Clicando para no botão
  cy.get('[data-test="login-button"]').click();
  //Retornando a informação
  return infos_login;
}

function infos_compra(){

  let first_name = "John";
  let last_name = "Doe";
  let postal_code = "12345";

  let minuto = new Date().getMinutes();
  let segundo = new Date().getSeconds();

  let first_name_comp = first_name + minuto + segundo;
  let last_name_comp = last_name + minuto + segundo;
  let postal_code_comp = postal_code + minuto + segundo;

  let infos_comprador = [first_name_comp, last_name_comp, postal_code_comp];

  return infos_comprador;

}