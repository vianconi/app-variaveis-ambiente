const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// Definindo variáveis de ambiente com valores padrão
const appName = process.env.APP_NAME || 'Aplicação Kubernetes';
const appVersion = process.env.APP_VERSION || '1.0';
const appAuthor = process.env.APP_AUTHOR || 'Desconhecido';

app.get('/', (req, res) => {
    res.render("index", {appName, appVersion, appAuthor});
});

app.listen(port, () => {
  console.log(`Aplicação ouvindo na porta ${port}`);
});
