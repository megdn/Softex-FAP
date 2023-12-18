# Atividade

Aplique o padrão de projeto Observer para criar um simples editor de texto. Considere a solução apresentada no Hipertexto 6 e utilize o código visto para implementar novas classes. Os requisitos para avaliar o projeto são:

- implementar uma subclasse da classe Editor chamada TextEditor;
- aplicar o método insertLine, que recebe os parâmetros lineNumber e text;
- inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário;
- aplicar o método removeLine, que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e desloca as linhas posteriores se necessário;
- instanciar um TextEditor e disparar o evento “open”;
- receber as linhas de texto, que serão inseridas no objeto textEditor, do usuário até que ele envie o texto “EOF”, que não deve ser inserido no objeto textEditor;
- por fim, o textEditor deve disparar o evento “save” para que o conteúdo seja salvo no arquivo configurado e imprimir todo o conteúdo do arquivo na tela.

## Resposta

``` typescript
interface Observer {
  update(): void;
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

class Editor implements Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => observer.update());
  }
}

class TextEditor implements Observer {
  private lines: string[] = [];

  update(): void {
    console.log("Conteúdo atualizado:");
    console.log(this.lines.join("\n"));
  }

  insertLine(lineNumber: number, text: string): void {
    this.lines.splice(lineNumber - 1, 0, text);
  }

  removeLine(lineNumber: number): void {
    this.lines.splice(lineNumber - 1, 1);
  }

  getText(): string[] {
    return this.lines;
  }

  save(): void {
    console.log("Conteúdo salvo no arquivo.");
  }
}

class TextEditorDemo {
  static main(): void {
    const editor = new Editor();
    const textEditor = new TextEditor();

    editor.addObserver(textEditor);

    let lineNumber = 1;
    let userInput = "";

    while (userInput !== "EOF") {
      userInput = prompt(`Digite o texto da linha ${lineNumber} (ou "EOF" para encerrar): `) || "";

      if (userInput !== "EOF") {
        textEditor.insertLine(lineNumber, userInput);
        lineNumber++;
      }
    }

    editor.notifyObservers();

    console.log("\nConteúdo final do arquivo:");
    console.log(textEditor.getText().join("\n"));
  }
}

TextEditorDemo.main();

```