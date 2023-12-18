# Atividade

Você é um agente secreto altamente treinado da organização inglesa MI7 e recebeu uma missão crítica
proteger a Base Secreta contra invasões inimigas. O local contém informações vitais para a segurança
mundial e só pode ser acessado por um único sistema de segurança confiável.

A sua tarefa é implementar um sistema de segurança para a Base Secreta usando o padrão Singleton em
TypeScript. A ideia é que apenas uma instância do sistema de segurança possa ser criada, garantindo
que o local esteja bem protegido.

Instruções:

1) Crie uma classe chamada SistemaSeguranca. Ela deve implementar o padrão Singleton. Certifique-se
de que apenas uma instância da classe possa ser criada;

2) A classe SistemaSeguranca deve ter um método chamado acessarBaseSecreta. Ele verífica se a senha
inserida pelo agente coincide com a da Base Secreta. Se estiver correta, o acesso é concedido. Caso
contrário, é negado;

3) Crie um programa principal que demonstre o uso do Singleton SistemaSeguranca. No programa, um
agente secreto tentará acessar a Base Secreta inserindo uma senha. Se a senha estiver correta, o acesso
será concedido. Caso contrário, será negado.

## Resposta

``` typescript
class SistemaSeguranca {
  private static instancia: SistemaSeguranca | null = null;
  private senhaBaseSecreta: string = "senhaUltraSecreta123"; // Senha da Base Secreta

  private constructor() {
    // Construtor privado para evitar instanciamento direto
  }

  static getInstance(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  acessarBaseSecreta(senhaInserida: string): void {
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido à Base Secreta!");
    } else {
      console.log("Acesso negado! Senha incorreta.");
    }
  }
}

// Programa principal
const sistemaSeguranca = SistemaSeguranca.getInstance();

// Agente secreto tenta acessar a Base Secreta
sistemaSeguranca.acessarBaseSecreta("senhaIncorreta"); // Acesso negado
sistemaSeguranca.acessarBaseSecreta("senhaUltraSecreta123"); // Acesso concedido

```