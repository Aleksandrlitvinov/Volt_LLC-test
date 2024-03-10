import {ReactNode, useCallback} from 'react'
import {Paper} from '@mui/material'
import s from './todo.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {changeTodoTitle, createTaskForTodo, RootState} from '@/store'
import {AddItemForm, EditTitle} from '@/features'

export const Todo = (): ReactNode => {
  const {todoTitle, todoId} = useSelector((state: RootState) => state.todo)
  const dispatch = useDispatch()
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