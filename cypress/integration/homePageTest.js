describe('Home page', () => {
    it('should display hello world', () => {
        // given
        let url = 'http://127.0.0.1:5500/app/index.html';
        
        //when
        cy.visit(url);
        cy.get('#name_input').type('Mindaugai')
        cy.get('button').click() 

        //then
        cy.contains('Labas Mindaugai!')

        //teardown

    });
});