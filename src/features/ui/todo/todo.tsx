import {ReactNode, useCallback} from 'react'
import {Paper} from '@mui/material'
import s from './todo.module.scss'
import {changeTodoTitle, createTaskForTodo, RootState} from '@/store'
import {AddItemForm, EditTitle} from '@/features'
import {useAppDispatch, useAppSelector} from '@/hooks'

export const Todo = (): ReactNode => {
  const {todoTitle, todoId} = useAppSelector((state: RootState) => state.todo)
  const dispatch = useAppDispatch()
  const onChangeTodoTitleHandler = async (newTitle: string, todoId: string): Promise<void> => {
    dispatch(changeTodoTitle({newTitle: newTitle, todoId: todoId}))
  }
  const addNewTask = useCallback(
    (taskTitle: string) => {
      dispatch(createTaskForTodo({taskTitle: taskTitle, todoId: todoId}))
    },
    [dispatch, todoId]
  )
  return (
    <Paper elevation={5} style={{borderRadius: '10px'}} className={s.todo}>
      <div className={s.tasksListWrapper}>
        <div className={s.tasksListTitle}>
          <EditTitle itemId={todoId} itemTitle={todoTitle} callback={onChangeTodoTitleHandler}/>
        </div>
        <div>
          <AddItemForm callback={addNewTask} className={s.form} placeholder={'add new task'}/>
        </div>
        <div className={s.tasksList}>
          TasksList
        </div>
        <div>
          FilterTasks
        </div>
      </div>
    </Paper>
  )
}