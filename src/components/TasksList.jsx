import React from "react";
import { TasksItem } from "./TaskItem";
import { tasksContext } from '../context/tasksContext';

export function TasksList() {
  const {tasks, changeTasks} = React.useContext(tasksContext);

  return (
    <ul className="tasks-list">
      {tasks.map(task => <TasksItem key={task.id} id={task.id} description={task.description} done={task.done} />)}
    </ul>
  )
}