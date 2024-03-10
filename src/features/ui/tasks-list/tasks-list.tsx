import { memo } from 'react'

import { Task } from '@/features'
import { useAppSelector } from '@/hooks'
import {FilterTasksType, RootState, TaskType} from '@/store'
import {Typography} from '@mui/material'



type TasksListProps = {
  filter: FilterTasksType
  todoTitle: string
}

export const TasksList = memo((props: TasksListProps) => {
  const { filter, todoTitle } = props
  const tasks = useAppSelector((state: RootState) => state.todo.tasksList)

  let tasksWithStatus = tasks

  if (filter === 'current') {
    tasksWithStatus = tasks.filter(t => !t.isCompleted)
  }
  if (filter === 'completed') {
    tasksWithStatus = tasks.filter(t => t.isCompleted)
  }

  return (
    <div>
      {
        !tasks?.length
          ? <Typography style={{ textAlign: 'center' }}>
            Add your first task in {todoTitle}
          </Typography>
          : !tasksWithStatus?.length
            ? <Typography style={{ textAlign: 'center' }}>
                List of '{filter}' tasks is empty!
            </Typography>
            : tasksWithStatus?.map((task: TaskType) => <Task {...task} key={task.taskId} />)
      }
    </div>
  )
})
