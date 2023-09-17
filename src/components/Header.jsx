import React from 'react';
import { NewTaskForm } from './NewTaskForm';

export function Header() {
  return (
    <header className='header'>
      <NewTaskForm />
      <h1 className='main-heading'>TODO</h1>
    </header>
  )
}