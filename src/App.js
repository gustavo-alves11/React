
import { useState } from 'react';
import './App.css';
import Titulo from './componentes/titulo/Titulo';
import Campo from './componentes/campo/Campo';
import Tarefas from './componentes/tarefas/Tarefas';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: uuidv4(),
      descricao: 'Primeira tarefa',
      cor: '#ff0000'
    },
    {
      id: uuidv4(),
      descricao: 'Primeira tarefa',
      cor: '#ff0000'
    },
    {
      id: uuidv4(),
      descricao: 'Segunda tarefa',
      cor: '#ffffff'
    },
    {
      id: uuidv4(),
      descricao: 'Primeira tarefa',
      cor: '#ff0000'
    }
  ])
  
  const [descricao, setDescricao] = useState('')
  // const [cor, setCor] = useState('')

  function adicionarTarefa(tarefa){
    setTarefas([...tarefas, {id: uuidv4(), descricao: tarefa, cor:'#ff0000'}])
  }

  function removerTarefa(id){
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
  }

  function mudaCor(id, cor){
    setTarefas(tarefas.map(tarefa => {
          if(id === tarefa.id){
             tarefa.cor = cor
          }
          return tarefa;
        }));
      
  }

  return (
    <div className="App">
      <div className="container">
        <Titulo text="To-do List"></Titulo>
        <Campo 
          adicionar={adicionarTarefa}
          descricao={descricao} 
          aoAlterado={valor => setDescricao(valor)}
        ></Campo>
        <Titulo text="Suas tarefas:" ></Titulo>
        {tarefas.map((tarefa) => <Tarefas tarefa={tarefa} deletar={removerTarefa} cor={tarefa.cor} mudacor={mudaCor}></Tarefas>)}
       
      </div>
    </div>
  );
}

export default App;
