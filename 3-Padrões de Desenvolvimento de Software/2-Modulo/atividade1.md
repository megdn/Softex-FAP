# Atividade

Aplique o padrão de projeto decorator para criar um sanduíche de frango assado com pepperoni e queijo
mussarela ralado. O projeto deve seguir os seguintes critérios:

- deve imprimir no console: Sanduíche de Carne, Bacon, QueijoMussarelaRalado custa $7,49.

- o sanduíche de frango assado custa $4,50. - o ingrediente adicional pepperoni custa $0,99.

- o ingrediente adicional queijo mussarela ralado custa $2,00.

- crie as classes necessárias: FrangoAssado, Pepperoni e QueijoMussarelaRalado

## Resposta

```  typescript

interface Sanduiche {
  custo(): number;
  descricao(): string;
}

class FrangoAssado implements Sanduiche {
  custo(): number {
    return 4.5;
  }

  descricao(): string {
    return "Sanduíche de Frango Assado";
  }
}

abstract class AdicionalDecorator implements Sanduiche {
  protected sanduiche: Sanduiche;

  constructor(sanduiche: Sanduiche) {
    this.sanduiche = sanduiche;
  }

  custo(): number {
    return this.sanduiche.custo();
  }

  descricao(): string {
    return this.sanduiche.descricao();
  }
}

class Pepperoni extends AdicionalDecorator {
  custo(): number {
    return this.sanduiche.custo() + 0.99;
  }

  descricao(): string {
    return this.sanduiche.descricao() + ", Pepperoni";
  }
}

class QueijoMussarelaRalado extends AdicionalDecorator {
  custo(): number {
    return this.sanduiche.custo() + 2.0;
  }

  descricao(): string {
    return this.sanduiche.descricao() + ", Queijo Mussarela Ralado";
  }
}

const sanduicheBase: Sanduiche = new FrangoAssado();
const sanduicheComPepperoni: Sanduiche = new Pepperoni(sanduicheBase);
const sanduicheCompleto: Sanduiche = new QueijoMussarelaRalado(sanduicheComPepperoni);

console.log(`${sanduicheCompleto.descricao()} custa $${sanduicheCompleto.custo().toFixed(2)}.`);

``` 