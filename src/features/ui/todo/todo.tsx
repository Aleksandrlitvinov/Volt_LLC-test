import {ReactNode} from 'react'
import {Paper} from '@mui/material'
import s from './todo.module.scss'
import {EditTitle} from "@/features/ui/edit-item-title/edit-item-title.tsx";
import {useDispatch, useSelector} from 'react-redux'
import {changeTodoTitle, RootState} from '@/store'

export const Todo = (): ReactNode => {
  const {todoTitle, todoId} = useSelector((state: RootState) => state.todo)
  const dispatch = useDispatch()
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onChangeTodoTitleHandler = async (newTitle: string, todoId: string) => {
    dispatch(changeTodoTitle({newTitle: newTitle, id: todoId}))
  }
  return (
    <Paper elevation={5} style={{borderRadius: '10px'}} className={s.todo}>
      <div className={s.tasksListWrapper}>
        <div className={s.tasksListTitle}>
          <EditTitle itemId={todoId} itemTitle={todoTitle} callback={onChangeTodoTitleHandler}/>
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