const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const database = [
  { studentid: 1, classid: 10 },
  { studentid: 2, classid: 10 },
  { studentid: 3, classid: 10 },
  { studentid: 1, classid: 11 },
  { studentid: 3, classid: 11 }
];

app.post('/presenca', (req, res) => {
  const listaPresenca = req.body; // Array de { studentid, classid }
  
  // Se a lista de presença estiver vazia retornar erro
  if (!listaPresenca || listaPresenca.length === 0) {
    return res.status(400).json({ error: 'A lista de presença está vazia.' });
  }
  // Se algum dos parâmetros não for nulo retornar erro
  else if(listaPresenca.some(({ studentid, classid }) => !studentid || !classid)) {
    return res.status(400).json({ error: 'Parâmetros nulos.' });
  }
  // Se algum dos parâmetros não for int retornar erro
  else if(listaPresenca.some(({ studentid, classid }) => typeof studentid !== 'number' || typeof classid !== 'number')) {
    return res.status(400).json({ error: 'Parâmetros inválidos.' });
  }

  // Verificar se a presença já foi registrada
  const presencaRegistrada = listaPresenca.some(({ studentid, classid }) => database.some((item) => item.studentid === studentid && item.classid === classid));
  if (presencaRegistrada) {
    return res.status(400).json({ error: 'Presença já registrada.' });
  }
  // Se não, registrar a presença
  else {
    listaPresenca.forEach(({ studentid, classid }) => {
      database.push({ studentid, classid });
    });
    return res.status(201).json({ message: 'Presença registrada com sucesso.' });
  }

});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app; // Exportar o app para uso nos testes
