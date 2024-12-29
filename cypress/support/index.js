cy.on('window:before:unload', (e) => {
    // Prevent the dialog from appearing
    e.preventDefault();
  });
  