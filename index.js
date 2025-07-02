//Desafio Classificador de nível de Herói
//**O Que deve ser utilizado**

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões

//## Objetivo

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
let nomeHeroi = prompt("Digite o nome do Herói: ");
let expHeroi = parseInt(prompt("Qual é quantidade de experiência do seu Herói? "));

let nivel;

if (expHeroi < 1000) {
    nivel = "Ferro";
} else if (expHeroi < 2000) {
    nivel = "Bronze";
} else if (expHeroi < 5000) {
    nivel = "Prata";
} else if (expHeroi < 7000) {
    nivel = "Ouro";
} else if (expHeroi < 8000) {
    nivel = "Platina";
} else if (expHeroi < 9000) {
    nivel = "Ascendente";
} else if (expHeroi < 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível ${nivel}`);



