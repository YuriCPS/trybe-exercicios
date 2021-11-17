let singer = {
  name: "Milton",
  lastName: "Nascimento",
  nickname: "Bituca",
  age: 77,
  bestAlbuns: ["Travessia", "Clube da Esquina", "Minas"],
  bornInfo: {
    city: "Campina Grande",
    state: "Paraíba",
  },
};

let diasDaSemana = {
  1: "domingo",
  2: "segunda",
  3: "terça",
  4: "quarta",
  5: "quinta",
  6: "sexta",
  7: "sábado",
};

console.log(diasDaSemana[1]);

console.table(singer);

let conta = {
  agencia: "0000",
  banco: {
    cod: "012",
    id: 4,
    nome: "TrybeBank",
  },
};

let infoDoBanco = "banco";
console.log(conta["banco"]);
console.log(conta["banco"]["nome"]);

console.log(conta.banco);
console.log(conta.banco.nome);

console.log(conta.agencia);
console.log(conta["agencia"]);

console.log(conta.banco.cod);
console.log(conta["banco"]["id"]);

console.log(Object.values(diasDaSemana));
