var rafa = {nome: "Rafa", vitórias: 2, empates:1, derrotas: 1, pontos: 0 };
var paulo = {nome: "Paulo", vitórias: 2, empates:1, derrotas: 1, pontos: 0 };

var resultadoDosPontos = calculaPontos (rafa);


function calculaPontos (jogador) {
    var pontos = (jogador.vitórias * 3) + jogador.empates
    return pontos
};
console.log(resultadoDosPontos);