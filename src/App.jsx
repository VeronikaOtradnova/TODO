import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { tasksContext } from './context/tasksContext'

function App() {
  const [tasks, setTasks] = useState([{
    id: Date.now(),
    description: 'Первое дело',
    done: false,
  }]);
  const TasksProvider = tasksContext.Provider;


  return (
    <TasksProvider value={{
      tasks: tasks,
      changeTasks: setTasks,
    }}>
      <Header />
      <Content />
    </TasksProvider>
  )
}

export default App
