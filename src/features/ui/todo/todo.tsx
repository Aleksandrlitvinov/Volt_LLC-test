import {ReactNode} from 'react'
import {Paper} from '@mui/material'
import s from './todo.module.scss'

export const Todo = (): ReactNode =>{
  return (
    <Paper elevation={5} style={{ borderRadius: '10px' }} className={s.todo}>
      <div className={s.tasksListWrapper}>
        <div className={s.tasksListTitle}>
          Title
        </div>
        <input type="text"/>
        <div className={s.tasksList}>
          TasksList
        </div>
        FilterTasks
      </div>
    </Paper>
  )
}