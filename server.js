const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde la API!\n');
});

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`¡Hola, ${nombre}!\n`);
});

app.post('/ejemplo', (req, res) => {
  res.send('Petición POST recibida.\n');
});

app.get('/suma/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const suma = num1 + num2;
  res.send(`La suma de ${num1} y ${num2} es ${suma}.\n`);
});

// Ruta para servir el index.html
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req, res, next) => {
  res.status(404).send('Ruta no encontrada\n');
});

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
