import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto  ', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(testUser);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Marco';
        
        const testActiveUser = {
            uid: 'ABC567',
            username: name
        };

        const activeUser = getUsuarioActivo(name);

        expect(activeUser).toEqual(testActiveUser);
    })
});