const express = require('express');
const app = express();
const port = 3000;

// Rota principal (GET)
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// Rota com parâmetro
app.get('/ola/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`Olá ${nome}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
