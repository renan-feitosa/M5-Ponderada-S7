const request = require('supertest');
const app = require('./server.js');

// Saca só os testes do pai, Gabs <3

describe('POST /presenca', () => {
    it('Deve registrar presença com sucesso', async () => {
        const response = await request(app)
            .post('/presenca')
            .send([{ studentid: 8, classid: 18 }]); // Envia dados novos para teste
        
        // Verifica se o status é o esperado -> se o corpo da resposta é o esperado
        expect(response.status).toBe(201);
        expect(response.body).toEqual({ message: 'Presença registrada com sucesso.' });
    });

    it('Deve retornar erro quando a lista de presença está vazia', async () => {
        const response = await request(app)
            .post('/presenca')
            .send([]); // Envia lista vazia para teste
        
        // Verifica se o status é o esperado -> se o corpo da resposta é o esperado
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'A lista de presença está vazia.' });
    });

    it('Deve retornar erro quando parâmetros são nulos', async () => {
        const response = await request(app)
            .post('/presenca')
            .send([{ studentid: null, classid: 101 }]); // Envia parâmetros nulos para teste
        
        // Verifica se o status é o esperado -> se o corpo da resposta é o esperado
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Parâmetros nulos.' });
    });

    it('Deve retornar erro quando parâmetros são inválidos', async () => {
        const response = await request(app)
            .post('/presenca')
            .send([{ studentid: 'invalido', classid: 101 }]); // Envia parâmetros inválidos (tipo de dado inválido) para teste
        
        // Verifica se o status é o esperado -> se o corpo da resposta é o esperado
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Parâmetros inválidos.' });
    });

    it('Deve retornar erro quando presença já registrada', async () => {
        const response = await request(app)
            .post('/presenca')
            .send([{ studentid: 1, classid: 11 }]); // Envia presença já registrada para teste
        
        // Verifica se o status é o esperado -> se o corpo da resposta é o esperado"
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Presença já registrada.' });
    });
});