//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
//A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

//INSS (Instituto Nacional do Seguro Social)
//Salário bruto até R$ 1.556,94: alíquota de 8%
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

//IR (Imposto de Renda)
//Até R$ 1.903,98: isento de imposto de renda
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto = 3000;

let inss = 0.0;
let salarioBase = 0.0;
let ir = 0.0;
let salarioLiquido;

let inss1 = [0, 1556.94, 0.08]; // [0:valorInicial, 1:valorFinal, 2:aliquota]
let inss2 = [1556.95, 2594.92, 0.09];
let inss3 = [2594.93, 5189.82, 0.11];
let inss4 = [5189.83, 1, 570.88];

let ir1 = [0, 1903.98, 0, 0]; // [0:valorInicial, 1:valorFinal, 2:aliquota, 3:parcela]
let ir2 = [1903.99, 2826.65, 0.075, 142.8];
let ir3 = [2826.66, 3751.05, 0.15, 354.8];
let ir4 = [3751.06, 4664.68, 0.225, 636.13];
let ir5 = [4664.69, 1, 0.275, 869.36];

console.log("Salário bruto:", salarioBruto);

//Verifica valor do INSS
if (salarioBruto >= inss1[0] && salarioBruto <= inss1[1]) {
  inss = salarioBruto * inss1[2];
} else if (salarioBruto >= inss2[0] && salarioBruto <= inss2[1]) {
  inss = salarioBruto * inss2[2];
} else if (salarioBruto >= inss3[0] && salarioBruto <= inss3[1]) {
  inss = salarioBruto * inss3[2];
} else if (salarioBruto >= inss4[0]) {
  inss = inss4[2];
}
console.log("INSS:", inss);

//Atualiza o salário base pra calcular o IR
salarioBase = salarioBruto - inss;

console.log("Salário base:", salarioBase);

//Verifica valor do IR
if (salarioBase >= ir1[0] && salarioBase <= ir1[1]) {
  ir = salarioBase * ir1[2] - ir2[3];
} else if (salarioBase >= ir2[0] && salarioBase <= ir2[1]) {
  ir = salarioBase * ir2[2] - ir2[3];
} else if (salarioBase >= ir3[0] && salarioBase <= ir3[1]) {
  ir = salarioBase * ir3[2] - ir3[3];
} else if (salarioBase >= ir4[0] && salarioBase <= ir4[1]) {
  ir = salarioBase * ir4[2] - ir4[3];
} else if (salarioBase >= ir5[0]) {
  ir = salarioBase * ir5[2] - ir5[3];
}
console.log("IR:", ir);

salarioLiquido = salarioBase - ir;

console.log("");
console.log("Salário líquido:", salarioLiquido);
