import { ChangeEvent, memo, useCallback, useState } from 'react'
import { EditTitle } from '@/features'
import { useAppDispatch } from '@/hooks'
import { ModalRemove } from '@/shared'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { Checkbox, Fab, Tooltip } from '@mui/material'
import clsx from 'clsx'

import s from './task.module.scss'
import {removeTodoTask, TaskType, updateTodoTask} from '@/store'

export const Task = memo((props: TaskType) => {
  const task = props
  const [showModal, setShowModal] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const onUpdateStatusHandler = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const newStatus = e.currentTarget.checked
      const updatedTask: TaskType = {
        ...task,
        isCompleted: newStatus,
      }

      await dispatch(
        updateTodoTask(updatedTask)
      )
    },
    [dispatch, task]
  )

  const onChangeTaskTitle = useCallback(
    async (newTitle: string) => {
      const updatedTask: TaskType = {
        ...task,
        taskTitle: newTitle,
      }

      await dispatch(updateTodoTask(updatedTask))
    },
    [dispatch, task]
  )
  const deleteTask = (taskId: string): void => {
    dispatch(removeTodoTask({ id: taskId}))
  }

  return (
    <div className={clsx(s.task, task.isCompleted && s.isDone)}>
      <div className={s.taskTitle}>
        <Checkbox
          checked={task.isCompleted}
          color={'success'}
          onChange={e => onUpdateStatusHandler(e)}
        />
        <EditTitle
          callback={onChangeTaskTitle}
          itemId={task.taskId}
          itemTitle={task.taskTitle}
          label={'edit'}
        />
      </div>
      <div className={s.icons}>
        <Tooltip placement={'top'} title={'Delete'}>
          <Fab className={s.icon} color={'inherit'} onClick={() => setShowModal(true)}>
            <DeleteForeverIcon />
          </Fab>
        </Tooltip>
      </div>
      <ModalRemove
        handleClose={() => setShowModal(false)}
        id={task.taskId}
        open={showModal}
        removeItem={deleteTask}
        title={task.taskTitle}
      />
    </div>
  )
})
