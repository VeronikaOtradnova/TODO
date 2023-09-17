import React, { useState } from 'react';
import { tasksContext } from '../context/tasksContext';

export function NewTaskForm() {
  const {tasks, changeTasks} = React.useContext(tasksContext);
  const [inputValue, setInputValue] = useState('');

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    changeTasks([...tasks, {
      id: Date.now(),
      description: inputValue,
      done: false,
    }])

    setInputValue('');
  }

  return (
    <form className='new-task-form' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Придумайте новое дело' 
        value={inputValue} 
        onChange={inputHandler}
        className='input new-task-form__input' 
      />
      <button className='btn new-task-form__btn'>Добавить</button>
    </form>
  )
}