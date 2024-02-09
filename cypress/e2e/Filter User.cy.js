
describe('User Account Filtering Workflow', () => {
  beforeEach(() => {
    cy.login('glctest1234', 'Test!@3');
  });
    //Test Case 1: Basic Search Functionality
  it('should return the correct user when searched by username', () => {
    cy.intercept('GET', 'https://demo.netbox.dev/users/users/?q=LRZS').as('searchResults');
    cy.visit('https://demo.netbox.dev/users/users/'); 
    cy.get('#filters-form-tab').click({ force: true }); 
    cy.get('#id_q').type('LRZS');
    cy.get('button[type="submit"].btn.btn-sm.btn-primary.m-1').click();
    cy.wait('@searchResults');
    cy.get('#object_list').contains('LRZS')
  });

    //Test Case 7: Reset Filter Functionality
    it('should clear all filters when the Reset button is clicked', () => {
      cy.visit('https://demo.netbox.dev/users/users/'); 
      cy.get('#filters-form-tab').click({ force: true }); 
      cy.get('#id_q').type('LRZS');
      
      // Interact with dropdowns to set filters
      cy.get('.ss-main').eq(1).click(); // For group
      cy.get('.ss-option').contains('Staff').click();
      cy.get('.ss-main').eq(1).click(); // Click again to close the dropdown
      cy.wait(1000); // Wait for 1 second
    
      cy.get('.ss-main').eq(2).click(); // For status: Is Active 
      cy.get('select[name="is_active"]').select('True', { force: true });
      cy.get('.ss-main').eq(2).click(); // Click again to close the dropdown
      cy.wait(1000); // Wait for 1 second

      cy.get('.ss-main').eq(3).click(); // For status: Is Staff 
      cy.get('select[name="is_staff"]').select('False', { force: true });
      cy.get('.ss-main').eq(3).click(); // Click again to close the dropdown
      cy.wait(1000); // Wait for 1 second
    
      cy.get('.ss-main').eq(4).click(); // For status: Is Superuser 
      cy.get('select[name="is_superuser"]').select('False', { force: true });
      cy.get('.ss-main').eq(4).click(); // Click again to close the dropdown
      cy.wait(1000); // Wait for 1 second
    
      // Click the Reset button to clear all filters
      cy.get('button.btn.btn-sm.btn-outline-danger.m-1[data-reset-select]').click();
      cy.get('#filters-form-tab').click({ force: true }); 

      // Verify the query input is cleared
      cy.get('#id_q').should('have.value', '');
    
      // Assuming the first dropdown reverts to a placeholder 
      cy.get('.ss-main').eq(1).find('.ss-disabled').should('contain', 'Select Group');      
      // Assuming the dropdowns for "Is Active", "Is Staff", and "Is Superuser" also revert to a default state
      cy.get('.ss-main').eq(2).find('.ss-single-selected').should('contain', '---------');   
      cy.get('.ss-main').eq(3).find('.ss-single-selected').should('contain', '---------');
      cy.get('.ss-main').eq(4).find('.ss-single-selected').should('contain', '---------');
    });
    

});
