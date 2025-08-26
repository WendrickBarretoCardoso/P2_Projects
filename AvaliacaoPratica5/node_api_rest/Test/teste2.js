const autocannon = require('autocannon');

const run = () => {
  const instance = autocannon({
    url: 'http://localhost:3000/aircraft', // endpoint da API
    connections: 50, // conexões simultâneas
    duration: 10, // duração do teste
    pipelining: 1, // requisições em sequência
    method: 'GET'
  });

  autocannon.track(instance); // exibe progresso no terminal
};

run();
