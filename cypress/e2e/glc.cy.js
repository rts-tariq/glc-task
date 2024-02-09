import '/support/commands';

describe('Add New Site Workflow', () => {
  beforeEach(() => {
    // Replace 'yourUsername' and 'yourPassword' with the credentials for the test account
    cy.login('glctest1234', 'Test!@3');
  });

  it('should add a site with all required fields', () => {
    cy.visit('/organization/sites/add/');
    cy.get('#id_name').type('TS TESTe');
    cy.get('#id_slug').type('rts-001');
    // Include other required fields here
    cy.get('button[type="submit"]').click();
    cy.contains('Site added successfully'); // Adjust success message as necessary
  });

  it('should not allow a site to be added with a duplicate name', () => {
    cy.visit('/organization/sites/add/');
    cy.get('input[name="name"]').type('Existing Site Name');
    cy.get('input[name="slug"]').type('existing-site-name');
    // Include other required fields here
    cy.get('button[type="submit"]').click();
    cy.contains('Name already in use'); // Adjust error message as necessary
  });
});
