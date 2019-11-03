import { authenticate, getUseraccount } from "../helpers/services";

describe('Helpers test', () => {
    
    beforeEach(() => {
        jest.setTimeout(10000); 
    });


    it('Test authenticate successful', () => {
        const formDataObject={
            username: "rios", 
            password: "loerardo123"
        };

        return authenticate(formDataObject)
        .then(response => { 
            expect(response.status).toBe(200)
        });
    });


    it('Test authenticate fail', () => {
        const formDataObject={
            username: "rios", 
            password: "loerarddo123"
        };

        return authenticate(formDataObject)
        .then(response => { 
            expect(response.status).toBe(401)
        });
    });


    it('Test getUseraccount is greater than 1', () => {

        return getUseraccount()
        .then(data => { 
            expect(data.length).toBeGreaterThan(1);
        });
    });

    it('Test getWirecolor is greater than 1', () => {

        return getUseraccount()
        .then(data => { 
            expect(data.length).toBeGreaterThan(1);
        });
    });

});