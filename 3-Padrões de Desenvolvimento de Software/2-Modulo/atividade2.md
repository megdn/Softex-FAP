# Atividade

Crie um adaptador que permita que um objeto do tipo Pato seja usado como se fosse um objeto do tipo
Galinha.

crie as classes AdaptadorPato e AdaptadorPatoDemo para
demonstrar o uso da classe AdaptadorPato.

## Resposta

``` typescript

interface Galinha {
  cacarejar(): void;
  botarOvo(): void;
}

class Pato {
  grasnar(): void {
    console.log("Quack! Quack!");
  }

  voar(): void {
    console.log("Voando alto!");
  }
}

class AdaptadorPato implements Galinha {
  private pato: Pato;

  constructor(pato: Pato) {
    this.pato = pato;
  }

  cacarejar(): void {
    this.pato.grasnar(); 
  }

  botarOvo(): void {
    console.log("Pato não bota ovos!"); 
  }
}

class AdaptadorPatoDemo {
  static main(): void {
    const patoComum = new Pato();
    const adaptadorPato: Galinha = new AdaptadorPato(patoComum);

    console.log("Ações de uma Galinha:");
    adaptadorPato.cacarejar();
    adaptadorPato.botarOvo();

    console.log("\nAções de um Pato:");
    patoComum.grasnar();
    patoComum.voar();
  }
}

AdaptadorPatoDemo.main();

``` 