import {ReactNode} from 'react'
import s from './tasks-counter.module.scss'
import {useAppSelector} from '@/hooks'
import {RootState} from '@/store'

export const TasksCounter = (): ReactNode => {
  const tasks = useAppSelector((state: RootState) => state.todo.tasksList)
  const completedTasks = tasks.filter(t => t.isCompleted).length
  const unCompletedTasks = tasks.filter(t => !t.isCompleted).length

  return(
    <div className={s.counter}>
      <p className={s.title}>completed:
        <span className={s.completedCount}>{completedTasks}</span>
      </p>
      <p className={s.title}>uncompleted:
        <span className={s.uncompletedCount}>{unCompletedTasks}</span>
      </p>
    </div>
  )
}