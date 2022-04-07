import React, { FC, useState, ChangeEvent } from 'react';
import './App.css';
import { ITask } from './Interfaces'
import { TodoTask } from './TodoTask';

const App: FC = () => {

  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])
  const [editMode, setEditMode] = useState<boolean>(false)


  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task') {
      setTask(e.target.value)
    } else {
      setDeadline(+e.target.value)
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTodoList([...todoList, newTask])
    setTask('')
    setDeadline(0)
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter(task => taskNameToDelete !== task.taskName))

  }

  const editTask = (): void => {
    setEditMode(!editMode)
  }


  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input
            type='text'
            placeholder='Task...'
            name='task'
            onChange={handleChange}
            value={task}
          />
          <input
            type='number'
            placeholder='Deadline...(Days)'
            name='deadline'
            onChange={handleChange}
            value={deadline}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todoList.map((task: ITask, key: number) => (
          !editMode ? <TodoTask
                        key={key}
                        task={task}
                        completeTask={completeTask}
                        editTask={editTask}
          />

            :
            <div>
              in editMode
              <button onClick={editTask}>&#9989;</button>
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
