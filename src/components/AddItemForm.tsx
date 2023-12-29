import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import './AddItemForm.css'

type PropsType = {
  text: string
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  addTask: (text: string) => void
}

const AddItemForm = (props: PropsType) => {
  // const [error, setError] = useState<string | null>(null)

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.addTask(props.text)
    }

  }

  return (
    <>
      <TextField

        value={props.text}
        onChange={props.onChangeHandler}
        onKeyPress={onKeyPressHandler}
        placeholder="What is the task today?"
        // helperText={error}
        className="input_add"
        inputProps = {
          {
            sx: {
              '&::placeholder': {
                color: "#808080",
                opacity: 1,
              },
            },
          }
        }
      />
      <Button
        className="button_add"
        variant="contained"
        onClick={() => props.addTask(props.text)}
      >Add task</Button>
    </>
  );
};

export default AddItemForm;