import React, {ChangeEvent} from 'react';

type PropsType = {
  text: string
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  addTask: (text: string) => void
}

const AddItemForm = (props: PropsType) => {
  return (
    <div>
      <input value={props.text}
             onChange={props.onChangeHandler}
             onKeyPress={(e) => {
               if(e.key === 'Enter') {
                 props.addTask(props.text)
               }
             }}
      />
      <button onClick={() => props.addTask(props.text)}>Add task</button>
    </div>
  );
};

export default AddItemForm;