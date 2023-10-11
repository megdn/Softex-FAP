try {
    // Solicita ao usuário que insira dois números
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));
  
    // Verifica se os valores inseridos são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Pelo menos um dos valores não é um número válido.");
    }
  
    // Realiza a divisão
    const resultado = numero1 / numero2;
  
    // Verifica se o resultado é finito
    if (!isFinite(resultado)) {
      throw new Error("Resultado é infinito.");
    }
  
    // Exibe o resultado da divisão
    console.log(`Resultado da divisão: ${resultado}`);
  } catch (error) {
    // Captura e lida com exceções
    console.error(`Erro: ${error.message}`);
  } finally {
    // Bloco que é executado sempre, independentemente de exceções
    console.log("Fim do programa.");
  }
  