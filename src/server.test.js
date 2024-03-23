const request = require('supertest');
const app = require('./server.js');

describe('POST /presenca', () => {
    it('Deve registrar presença com sucesso', async () => {
        const response = await request(app)
            .post('/presenca')
            .send([{ studentid: 8, classid: 18 }]);
        
        expect(response.status).toBe(201);
        expect(response.body).toEqual({ message: 'Presença registrada com sucesso.' });
    });

    it('Deve retornar erro quando a lista de presença está vazia', async () => {
        const response = await request(app)
            .post('/presenca')
            .send([]);
        
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'A lista de presença está vazia.' });
    });

    it('Deve retornar erro quando parâmetros são nulos', async () => {
        const response = await request(app)
            .post('/presenca')
            .send([{ studentid: null, classid: 101 }]);
        
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Parâmetros nulos.' });
    });

    it('Deve retornar erro quando parâmetros são inválidos', async () => {
        const response = await request(app)
            .post('/presenca')
            .send([{ studentid: 'invalido', classid: 101 }]);
        
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Parâmetros inválidos.' });
    });

    it('Deve retornar erro quando presença já registrada', async () => {
        const response = await request(app)
            .post('/presenca')
            .send([{ studentid: 1, classid: 11 }]);
        
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Presença já registrada.' });
    });
});