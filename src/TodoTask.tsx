import React from 'react'
import { ITask } from './Interfaces'

interface Props {
    task: ITask
    completeTask(taskNameToDelete: string): void
    editTask(): void
}

export const TodoTask = ({ task, completeTask, editTask }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={editTask} className='editButton'>&#9997;</button>
            <button onClick={() => completeTask(task.taskName)}>&#128465;</button>
        </div>

    )
}
