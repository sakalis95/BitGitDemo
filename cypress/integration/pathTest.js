describe('Happy path', () => {
    it('should display "Registracija sėkminga!"', () => {
        // given
        let url = 'http://127.0.0.1:5500/app/index2.html';
        
        //when
        cy.visit(url);
        cy.get('#user_name').type('R-123');
        cy.get('#psw').type('A12345`');
        cy.get('#rpsw').type('A12345`');
        cy.get('button').click();

        //then
        cy.contains('Registracija sėkminga!')

        //teardown

    });
});
describe('Negative path 1', () => {
    it('should display "Slaptažodis turi būti sudarytas iš ne mažiau 6 simbolių ir turi turėti bent vieną specialų simbolį (!, @, `):"', () => {
        // given
        let url = 'http://127.0.0.1:5500/app/index2.html';
        
        //when
        cy.visit(url);
        cy.get('#user_name').type('R-123');
        cy.get('#psw').type('A12345');
        cy.get('#rpsw').type('A12345');
        cy.get('button').click();

        //then
        cy.contains('Slaptažodis turi būti sudarytas iš ne mažiau 6 simbolių ir turi turėti bent vieną specialų simbolį (!, @, `):')

        //teardown

    });
});

describe('Negative path 2', () => {
    it('should display "Vartotojo kodas netinkamos struktūros (R-###):"', () => {
        // given
        let url = 'http://127.0.0.1:5500/app/index2.html';
        
        //when
        cy.visit(url);
        cy.get('#psw').type('A12345`');
        cy.get('#rpsw').type('A12345`');
        cy.get('button').click();

        //then
        cy.contains('Vartotojo kodas netinkamos struktūros (R-###):')

        //teardown

    });
});
