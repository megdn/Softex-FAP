# Atividade

Crie uma fábrica de veículos utilizando o padrão Prototype com base no exemplo apresentado no Hipertexto 2. Os requisitos do projeto devem ser:

- implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent;

- o construtor da classe Veículo deve receber modelo, marca, cor e numeroRodas como parâmetros;

- crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, por exemplo:
carro que tem dois campos a mais, como numeroRodas e numeroPortas;

- desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos
diferentes (subclasses), utilizando o método clone dos objetos para preencher o array;

- na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de
veículos, onde cada elemento deve ser um clone dos elementos do array veículos;

- no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones
de veículos.

### Resposta em Typescript

```typescript


abstract class Veiculo {
  constructor(public modelo: string, public marca: string, public cor: string, public numeroRodas: number) {}

  abstract clone(): Veiculo;

  represent(): string {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
  }
}


class Carro extends Veiculo {
  constructor(modelo: string, marca: string, cor: string, numeroRodas: number, public numeroPortas: number) {
    super(modelo, marca, cor, numeroRodas);
  }

  clone(): Carro {
    return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
  }

  represent(): string {
    return `${super.represent()}, Portas: ${this.numeroPortas}`;
  }
}


class Moto extends Veiculo {
  constructor(modelo: string, marca: string, cor: string, numeroRodas: number, public cilindradas: number) {
    super(modelo, marca, cor, numeroRodas);
  }

  clone(): Moto {
    return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
  }

  represent(): string {
    return `${super.represent()}, Cilindradas: ${this.cilindradas}`;
  }
}


class Aplicacao {
  criarVeiculos(): Veiculo[] {
    const veiculos: Veiculo[] = [];

    const carro1 = new Carro("Sedan", "Toyota", "Azul", 4, 4);
    const carro2 = new Carro("Hatchback", "Honda", "Vermelho", 4, 2);
    const moto1 = new Moto("Sport", "Yamaha", "Preto", 2, 600);
    const moto2 = new Moto("Cruiser", "Harley-Davidson", "Prata", 2, 1200);

    veiculos.push(carro1, carro2, moto1, moto2);

    return veiculos;
  }

  cloneVeiculos(veiculos: Veiculo[]): Veiculo[] {
    return veiculos.map((veiculo) => veiculo.clone());
  }

  imprimirVeiculos(veiculos: Veiculo[]) {
    veiculos.forEach((veiculo) => {
      console.log(veiculo.represent());
    });
  }
}

const app = new Aplicacao();
const veiculos = app.criarVeiculos();
const clones = app.cloneVeiculos(veiculos);

app.imprimirVeiculos(clones);

```