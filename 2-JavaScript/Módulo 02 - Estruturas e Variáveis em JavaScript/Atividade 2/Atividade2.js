console.log("Este é um programa de calculadora de operadores simples (+, -, *, ou /).");
console.log("Vamos fazer um cálculo?");

// Solicitando ao usuário que insira dois valores e um operador
let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let operador = prompt("Digite o operador (+, -, *, /):");
let valor2 = parseFloat(prompt("Digite o segundo valor:"));

let resultado;

// Realizando a operação com base no operador escolhido
switch (operador) {
  case "+":
    resultado = valor1 + valor2;
    break;
  case "-":
    resultado = valor1 - valor2;
    break;
  case "*":
    resultado = valor1 * valor2;
    break;
  case "/":
    if (valor2 !== 0) {
      resultado = valor1 / valor2;
      let sobra = valor1 % valor2; // Calculando a sobra
      console.log("Resultado: " + resultado);
      console.log("Sobra: " + sobra);
    } else {
      console.log("Erro: Divisão por zero não é permitida.");
    }
    break;
  default:
    console.log("Operador inválido.");
}

// Exibindo o resultado (caso não seja uma divisão)
if (operador !== "/") {
  console.log("Resultado: " + resultado);
}