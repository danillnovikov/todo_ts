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
  const [text, setText] = useState('')

  const onRemoveTask = (id: number) => {
    let filteredTasks = tasks.filter(t=> t.id !== id)
    setTasks(filteredTasks)
  }

  const addTask = (text: string) => {
    let newTask = {id: 4, title: text, isDone: false}
    let newTasks = [newTask, ...tasks]
    setTasks(newTasks)
    setText("")
  }

  return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.currentTarget.value)}/>
      <button onClick={() => addTask(text)}>add</button>
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