import React, { ChangeEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './EditableSpan.css';

type EditableSpanType = {
  id: string;
  title: string;
  isDone: boolean;
  onChange: (newValue: string) => void;
  onRemoveTask: (id: string) => void;
  onTaskDone: (id: string) => void;
};

export function EditableSpan(props: EditableSpanType) {
  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState(props.title);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const updateTitle = () => {
    setEditMode(false);
    props.onChange(title);
  };

  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleTaskDone = () => {
    props.onTaskDone(props.id);
  };

  const handlerRemoveTask = () => {
    props.onRemoveTask(props.id);
  };

  return editMode ? (
    <div className="card_item">
      <TextField value={title} onChange={onChangeTitleHandler} autoFocus />
      <Button onClick={updateTitle} variant={'contained'}>
        Update
      </Button>
    </div>
  ) : (
    <div className="card_item">
      <div
        onClick={handleTaskDone}
        style={{ textDecoration: props.isDone ? 'line-through' : '' }}
        className="text_item"
      >
        {props.title}
      </div>
      <div>
        <EditIcon onClick={activateEditMode} />
        <DeleteIcon onClick={handlerRemoveTask} />
      </div>
    </div>
  );
}
