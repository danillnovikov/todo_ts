import React, {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";


type EditableSpanType = {
  id: string
  title: string
  isDone: boolean
  onChange: (newValue: string) => void
  onRemoveTask: (id: string) => void
  onTaskDone: (id: string) => void
}

export function EditableSpan(props: EditableSpanType) {
  let [editMode, setEditMode] = useState(false)
  let [title, setTitle] = useState("")


  const activateEditMode = () => {
    setEditMode(true)
  }

  const updateTitle = () => {
    setEditMode(false)
    props.onChange(title)
  }

  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const handleTaskDone = () => {
    props.onTaskDone(props.id);
  }


  return editMode
    ? <div>
      <TextField value={title} onChange={onChangeTitleHandler}  autoFocus />
      <button onClick={updateTitle}>Update</button>
    </div>
    : <div>
      <span onClick={handleTaskDone} style={{textDecoration: props.isDone ? "line-through": ""}}>{props.title}</span>
      <EditIcon onClick={activateEditMode}/>
      <button onClick={() => props.onRemoveTask(props.id)}>x</button>
    </div>
}