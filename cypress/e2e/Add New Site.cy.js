
describe('Add New Site Workflow', () => {
  beforeEach(() => {
    cy.login('glctest1234', 'Test!@3');
  });
  // cy.login('glctest1234', 'Test!@3');
  const uniqueSuffix = Date.now().toString(); 
  const siteName = 'TS TEST ' + uniqueSuffix; 
  const slug = 'ts-test-' + uniqueSuffix;

    //Test Case 1: Add Site With All Required Fields
  it('should add a site with all required fields', () => {
    cy.visit('https://demo.netbox.dev/dcim/sites/add/');
    cy.get('#id_name').type(siteName);
    cy.get('#id_slug').type(slug);
    // Include other required fields here
    cy.get('button[type="submit"][name="_create"]').click();
    cy.get('.toast-body').should('contain', 'Created site ' + siteName);
    });

    //Test Case 5: Add Site With Duplicate Name
  it('should not allow a site to be added with a duplicate name', () => {
    cy.visit('https://demo.netbox.dev/dcim/sites/add/');
    cy.get('input[name="name"]').type(siteName);
    cy.get('input[name="slug"]').type(slug);
    // Include other required fields here
    cy.get('button[type="submit"][name="_create"]').click();
    cy.get('#id_name').then(($input) => {
      // Check if the input has the class indicating an error
      expect($input).to.have.class('is-invalid');
  
      // Now check the actual error message
    cy.get('.form-text.text-danger').should('contain', 'Site with this Name already exists.');
    });
  });
});
