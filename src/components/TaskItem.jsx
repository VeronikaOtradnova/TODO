import React from 'react';
import { tasksContext } from '../context/tasksContext';

export function TasksItem({id, description, done}) {
  const {tasks, changeTasks} = React.useContext(tasksContext);
  const [isInputOn, setIsInputOn] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(description);

  const taskIndex = tasks.findIndex(task => task.id === id);

  const checkboxHandler = (event) => {
    event.stopPropagation();
    const changedTasks = tasks.slice(0);
    changedTasks[taskIndex].done = !changedTasks[taskIndex].done;
    changeTasks(changedTasks);
  }

  const removeBtnHandler = () => {
    const taskIndex = tasks.findIndex(task => task.id === id);

    const changedTasks = tasks.slice(0);
    changedTasks.splice(taskIndex, 1);

    changeTasks(changedTasks);
  }

  const itemHandler = (event) => {
    setIsInputOn(!isInputOn);
    if (event.target){}
  }

  const inputClickHandler = (event) => {
    event.stopPropagation();
  }

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  }

  const formHandler = () => {
    event.preventDefault();

    const changedTasks = tasks.slice(0);
    changedTasks[taskIndex].description = inputValue;
    changeTasks(changedTasks);

    setIsInputOn(false);
  }

  const className = done ? 'task-item task-item_done' : 'task-item';

  return (
    <li className={className} onClick={itemHandler}>

      {!done && <input 
        type="checkbox"  
        className="task-item__done-checkbox" 
        onChange={checkboxHandler}
      />}
      {done && <p>Готово!</p>}

      {isInputOn ?
        <form onSubmit={formHandler}>
          <input
            type="text"
            value={inputValue}
            onClick={inputClickHandler}
            onChange={inputChangeHandler}
            className='input item__input'
          />
        </form>
        : <p className="task-item__description">{description}</p>
      }

      <button onClick={removeBtnHandler} className="btn task-item__remove-btn">Удалить</button>
    </li>
  )
}