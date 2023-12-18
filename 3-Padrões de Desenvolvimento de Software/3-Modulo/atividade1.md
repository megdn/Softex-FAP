# Atividade

Considerando a solução apresentada no Hipertexto 5, aplique o padrão de projeto Strategy para criar uma simples calculadora. Os requisitos para avaliar o projeto são:

- implementar uma interface Strategy com o método abstrato execute(). Deve haver três classes concretas que implementam a Strategy para realizar as operações de Soma, Subtração e Multiplicação de números inteiros;
- o método execute() deve receber dois números inteiros como parâmetros e retornar o resultado também como número inteiro;
- como input do usuário, a aplicação deve receber o primeiro valor, depois o segundo e, por último, a operação matemática que deve realizar;
- no final, a aplicação deve definir qual Strategy será usada, com base na operação informada, e imprimir o resultado da operação.

## Resposta

``` typescript


interface OperationStrategy {
  execute(num1: number, num2: number): number;
}

class AdditionStrategy implements OperationStrategy {
  execute(num1: number, num2: number): number {
    return num1 + num2;
  }
}

class SubtractionStrategy implements OperationStrategy {
  execute(num1: number, num2: number): number {
    return num1 - num2;
  }
}

class MultiplicationStrategy implements OperationStrategy {
  execute(num1: number, num2: number): number {
    return num1 * num2;
  }
}

class Calculator {
  private strategy: OperationStrategy;

  setStrategy(strategy: OperationStrategy): void {
    this.strategy = strategy;
  }

  calculate(num1: number, num2: number): number {
    if (!this.strategy) {
      throw new Error("Estratégia não definida");
    }

    return this.strategy.execute(num1, num2);
  }
}

class CalculatorDemo {
  static main(): void {
    const calculator = new Calculator();

    const num1 = parseFloat(prompt("Digite o primeiro número: ") || "0");
    const num2 = parseFloat(prompt("Digite o segundo número: ") || "0");
    const operation = prompt("Digite a operação (+, -, *): ");

    let strategy: OperationStrategy;

    switch (operation) {
      case "+":
        strategy = new AdditionStrategy();
        break;
      case "-":
        strategy = new SubtractionStrategy();
        break;
      case "*":
        strategy = new MultiplicationStrategy();
        break;
      default:
        console.log("Operação inválida.");
        return;
    }

    calculator.setStrategy(strategy);

    const result = calculator.calculate(num1, num2);
    console.log(`Resultado da operação: ${result}`);
  }
}

CalculatorDemo.main();


```