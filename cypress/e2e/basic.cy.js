/// <reference types="Cypress" />

describe('home page', () => {
    beforeEach(() => {
        cy.visit('https://www.goarmy.com/');
    });
    it('should render the hero video', () => {
      cy.get('[data-component="videohero"]').should('have.length', 1);
    });
  
    it('should display the nav', () => {
      const ul = cy.get('ul.middle-navigation')
      cy.get('ul.middle-navigation').should('have.length', 2);
      ;
    });
  });
  