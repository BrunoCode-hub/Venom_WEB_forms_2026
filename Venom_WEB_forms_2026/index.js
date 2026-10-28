console.log("Servidor do Venom WEB forms iniciado!");
const nomeDoProjeto = "Loja virtual do Venom";
const versao = "1.0.0";
console.log(`Projeto: ${nomeDoProjeto} - v${versao}`);

const { saudacao, formatarData } = require('./utils');
const config = require('./config');
console.log(saudacao('Professor'));
console.log(`Data de hoje: ${formatarData()}`);
console.log(`Rodando o projeto: ${config.nomeProjeto}`);
console.log(`Porta configurada: ${config.porta}`);