describe('signup page', () => {
  const baseUrl = Cypress.config().baseUrl;

  it('should display the password in plain text', () => {
    cy.visit('/signup');

    const inputPassword = '#Contraseña';

    cy.get(inputPassword).type('12345678');
    cy.get(inputPassword).should('have.attr', 'type').and('eq', 'password');
    cy.get('[aria-label="Mostrar contraseña"]').click();
    cy.get(inputPassword).should('have.attr', 'type').and('eq', 'text');
    cy.get(inputPassword).should('have.value', '12345678');
  });

  it.skip('should signup a user successfully', () => {
    cy.visit('/signup');

    const inputEmail = 'input[type="email"]';
    const inputPassword = 'input[type="password"]';
    const button = 'button[type="submit"]';

    cy.get(inputEmail).type(`mateo@test${Math.random()}.com`);
    cy.get(inputPassword).type('12345678');
    cy.get(button).click();
    cy.url().should('eq', `${baseUrl}?message=Te+registraste+correctamente`);
  });

  it('should show an error when the user exists', () => {
    cy.visit('/signup');

    const inputEmail = 'input[type="email"]';
    const inputPassword = 'input[type="password"]';
    const button = 'button[type="submit"]';

    cy.get(inputEmail).type('mateo@test1.com');
    cy.get(inputPassword).type('12345678');
    cy.get(button).click();
    cy.get('p').first().contains('Este usuario ya existe');
  });

  it('should show an error when filling a wrong email', () => {
    cy.visit('/signup');

    const inputEmail = 'input[type="email"]';
    const inputPassword = 'input[type="password"]';

    cy.get(inputEmail).type('mateo@test1');
    cy.get(inputPassword).focus();
    cy.get('p')
      .first()
      .contains('El correo electrónico ingresado no es correcto');
  });

  it('should show an error when the password is below of 8 characters', () => {
    cy.visit('/signup');

    const inputEmail = 'input[type="email"]';
    const inputPassword = 'input[type="password"]';

    cy.get(inputPassword).type('1234567');
    cy.get(inputEmail).focus();
    cy.get('p')
      .first()
      .contains('La contraseña debe tener mínimo 8 caracteres');
  });

  it('should redirect to login page after click on link', () => {
    cy.visit('/signup');

    cy.get('a').click();
    cy.url().should('eq', `${baseUrl}login`);
  });
});
