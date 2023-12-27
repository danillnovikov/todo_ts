import React, {useEffect, useState} from 'react';
import {v1} from 'uuid';
import EditIcon from '@mui/icons-material/Edit';

import './App.css';

type ArrayType = {
  id: string
  title: string
  isDone: boolean
}

function App() {
  const [tasks, setTasks] = useState<ArrayType[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));
  const [text, setText] = useState<string>('');

  const onRemoveTask = (id: string) => {
    let filteredTasks = tasks.filter(t=> t.id !== id)
    setTasks(filteredTasks)
  }

  const addTask = (text: string) => {
    let newTask = {id: v1(), title: text, isDone: false}
    let newTasks = [newTask, ...tasks]
    setTasks(newTasks)
    setText("")
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  return (
    <div className="App">
      <input value={text}
             onChange={(e) => setText(e.currentTarget.value)}
             onKeyPress={(e) => {
               if(e.key === 'Enter') {
                 addTask(text)
               }
             }}
      />
      <button onClick={() => addTask(text)}>add</button>
      {
        tasks.map(t => {
          return <div key={t.id}>
            {t.title}
            <EditIcon />
            <button onClick={() => onRemoveTask(t.id)}>x</button>
          </div>
        })
      }
    </div>
  );
}

export default App;



