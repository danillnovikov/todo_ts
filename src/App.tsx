import React, {ChangeEvent, useEffect, useState} from 'react';
import {v1} from 'uuid';

import './App.css';
import {EditableSpan} from "./components/EditableSpan";
import AddItemForm from "./components/AddItemForm";

export type ArrayType = {
  id: string
  title: string
  isDone: boolean
}

function App() {
  const [tasks, setTasks] = useState<ArrayType[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));
  const [text, setText] = useState<string>('');


  const onRemoveTask = (id: string) => {
    let filteredTasks = tasks.filter(t => t.id !== id)
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

  const changeTask = (id: string, newTitle: string) => {
    let task = tasks.find(t => t.id === id)
    if (task) {
      task.title = newTitle
      setTasks([...tasks])
    }
  }

  const taskDone = (id: string) => {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
    });
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }


  return (
    <div className="App">
      <AddItemForm
        onChangeHandler={onChangeHandler}
        addTask={addTask}
        text={text}
      />

      {
        tasks.map(t => {
          const onChangeTitleHandler = (newValue: string) => {
            changeTask(t.id, newValue)
          }


          return <div key={t.id}>
            <EditableSpan
              title={t.title}
              id={t.id}
              isDone={t.isDone}
              onChange={onChangeTitleHandler}
              onRemoveTask={onRemoveTask}
              onTaskDone={taskDone}
            />
          </div>
        })
      }
    </div>
  );
}

export default App;



