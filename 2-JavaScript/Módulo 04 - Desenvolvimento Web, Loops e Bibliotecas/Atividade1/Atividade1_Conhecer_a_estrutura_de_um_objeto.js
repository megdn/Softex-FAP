// Definir o objeto Banco
const _Banco = {
    conta: "45785-6",
    saldo: 4885,
    tipoConta: "corrente",
    agencia: "0470",
  
    // Método - buscar saldo
    buscarSaldo: function () {
      return this.saldo;
    },
  
    // Método  - fazer depósito
    deposito: function (valor) {
      if (valor > 0) {
        this.saldo += valor;
        return `Depósito de R$ ${valor} realizado com sucesso. Saldo atual: R$ ${this.saldo}`;
      } else {
        return "Valor inválido para depósito.";
      }
    },
  
    // Método - fazer saque
    saque: function (valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return `Saque de R$ ${valor} realizado com sucesso. Saldo atual: R$ ${this.saldo}`;
      } else {
        return "Saldo insuficiente ou valor de saque inválido.";
      }
    },
  
    // Método - pegar número da acc
    numeroDaConta: function () {
      return this.conta;
    },
  };
  
  // exemplos
  console.log("Número da Conta: " + Banco.numeroDaConta());
  console.log("Saldo atual: R$ " + Banco.buscarSaldo());
  console.log(_Banco.deposito(500));
  console.log(_Banco.saque(200));
  console.log("Saldo atual: R$ " + Banco.buscarSaldo());
  