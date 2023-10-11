// Função tradicional sem parâmetros
function saudacao() {
    console.log("Bem-vindo à sua Lista de Tarefas!");
  }
  
  // Função tradicional com parâmetros e retorno de valor
  function adicionarTarefa(lista, tarefa) {
    lista.push(tarefa);
    console.log(`Tarefa "${tarefa}" adicionada à lista.`);
  }
  
  // Arrow function com parâmetros e retorno de valor
  const removerTarefa = (lista, indice) => {
    if (indice >= 0 && indice < lista.length) {
      const tarefaRemovida = lista.splice(indice, 1);
      console.log(`Tarefa "${tarefaRemovida}" removida da lista.`);
    } else {
      console.log("Índice inválido. Nenhuma tarefa foi removida.");
    }
  };
  
  // Inicializa uma lista de tarefas vazia
  let listaDeTarefas = [];
  
  // Saudação inicial
  saudacao();
  
  // Menu de interação com o usuário
  while (true) {
    console.log("\nEscolha uma opção:");
    console.log("1. Adicionar Tarefa");
    console.log("2. Remover Tarefa");
    console.log("3. Exibir Lista de Tarefas");
    console.log("4. Sair");
  
    const escolha = parseInt(prompt("Digite o número da opção desejada:"));
  
    switch (escolha) {
      case 1:
        const novaTarefa = prompt("Digite a tarefa que deseja adicionar:");
        adicionarTarefa(listaDeTarefas, novaTarefa);
        break;
      case 2:
        console.log("Lista de Tarefas:");
        listaDeTarefas.forEach((tarefa, indice) => {
          console.log(`${indice + 1}. ${tarefa}`);
        });
  
        const indiceParaRemover = parseInt(prompt("Digite o número da tarefa a ser removida:")) - 1;
        removerTarefa(listaDeTarefas, indiceParaRemover);
        break;
      case 3:
        console.log("Lista de Tarefas:");
        listaDeTarefas.forEach((tarefa, indice) => {
          console.log(`${indice + 1}. ${tarefa}`);
        });
        break;
      case 4:
        console.log("Obrigado por usar a Lista de Tarefas!");
        process.exit();
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
  