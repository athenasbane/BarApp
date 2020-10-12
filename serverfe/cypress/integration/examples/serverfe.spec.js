describe('BarApp Server', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:3000');
      cy.contains('TABLE NO:');
      cy.contains('Number of Items')
    });
  });