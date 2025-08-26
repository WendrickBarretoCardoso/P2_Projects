// testeCarga.js
// Teste de carga para a atividade da Web API - Programação II

const fs = require('fs');
const autocannon = require('autocannon');

// Endpoints para testar
const endpoints = [
  'http://localhost:3000/',
  'http://localhost:3000/flight',
  'http://localhost:3000/passenger',
  'http://localhost:3000/aircraft',
];

// Cenários de teste
const cenarios = [
  { connections: 10, duration: 10, pipelining: 1},
  { connections: 50, duration: 10, pipelining: 1 },
  { connections: 100, duration: 10, pipelining: 1 }
];

// Função para rodar cada teste
async function rodarTeste(url, conexoes, duracao) {
  console.log(`\n🔹 Testando ${url} com ${conexoes} conexões por ${duracao}s...\n`);

  const result = await autocannon({
    url,
    connections: conexoes,
    duration: duracao,
    pipelining: 1,
    method: 'GET'
  });

  return {
    endpoint: url,
    connections: conexoes,
    duration: duracao,
    stats: result
  };
}

// Executar todos os testes e salvar em 1 arquivo
(async () => {
  const todosResultados = [];

  for (const endpoint of endpoints) {
    for (const cenario of cenarios) {
      const resultado = await rodarTeste(endpoint, cenario.connections, cenario.duration);
      todosResultados.push(resultado);
    }
  }

  fs.writeFileSync('resultados_teste.json', JSON.stringify(todosResultados, null, 2));
  console.log("\n✅ Todos os resultados foram salvos no arquivo 'resultados_teste.json'");
})();
