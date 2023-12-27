import React, {useState} from 'react';

import './App.css';

type ArrayType = {
  id: number
  title: string
  isDone: boolean
}

function App() {
  const [tasks, setTasks] = useState <ArrayType[]>([
    {id: 1, title: "Купить хлеба", isDone: false},
    {id: 2, title: "Купить молоко", isDone: false},
    {id: 3, title: "Купить рыбу", isDone: false},
  ])

  const onRemoveTask = (id: number) => {
    let filteredTasks = tasks.filter(t=> t.id !== id)
    console.log(filteredTasks)
    setTasks(filteredTasks)
  }

  return (
    <div className="App">
      <input/>
      <button>add</button>
      {
        tasks.map(t => {
          return <div key={t.id}>
            {t.title}
            <button onClick={() => onRemoveTask(t.id)}>x</button>
          </div>
        })
      }
    </div>
  );
}

export default App;