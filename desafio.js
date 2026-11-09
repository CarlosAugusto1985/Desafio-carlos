// Função que calcula o saldo
function calcularRankeadas(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão nível de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return { saldo, nivel };
}

// entrada de valores
let vitoriasJogador = 150;
let derrotasJogador = 15;

let resultado = calcularRankeadas(vitoriasJogador, derrotasJogador);

// Exibindo a mensagem final
console.log(`O Herói tem de saldo de **${resultado.saldo}** está no nível de **${resultado.nivel}**`);