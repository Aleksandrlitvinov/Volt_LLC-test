import {ReactNode, useCallback} from 'react'
import {Paper} from '@mui/material'
import s from './todo.module.scss'
import {changeFilterType, changeTodoTitle, createTaskForTodo, FilterTasksType, RootState} from '@/store'
import {AddItemForm, EditTitle, TasksList, FilterTasks} from '@/features'
import {useAppDispatch, useAppSelector} from '@/hooks'
import {TasksCounter} from '@/shared'

export const Todo = (): ReactNode => {
  const {todoTitle, todoId, filterTasks} = useAppSelector((state: RootState) => state.todo)
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

  const onClickSetFilterHandler = (value: string): void => {
    const currentFilter = value.trim()

    dispatch(changeFilterType(currentFilter as FilterTasksType))
  }
  return (
    <Paper elevation={5} style={{borderRadius: '10px'}} className={s.todo}>
      <div className={s.tasksListWrapper}>
        <div className={s.tasksListTitle}>
          <EditTitle itemId={todoId} itemTitle={todoTitle} callback={onChangeTodoTitleHandler} />
        </div>
        <TasksCounter />
        <div>
          <AddItemForm callback={addNewTask} className={s.form} placeholder={'add new task'}/>
        </div>
        <div className={s.tasksList}>
          <TasksList filter={filterTasks} todoTitle={todoTitle}/>
        </div>
        <div className={s.filterTasks}>
          <FilterTasks filter={filterTasks} onClickSetFilter={onClickSetFilterHandler}/>
        </div>
      </div>
    </Paper>
  )
}