import {ChangeEvent, memo, useCallback, useState} from 'react'

import {Input} from '@/shared'
import {Tooltip, Typography} from '@mui/material'
import {TaskType} from '@/store'

type EditTitlePropsType = {
  callback?: (id: string, newTitle: string) => void
  itemId: string
  itemTitle: string
  label?: string
  changeStatus: (task: TaskType) => void
  task: TaskType
}
export const EditTitle = memo((props: EditTitlePropsType) => {
  const {callback, itemId, itemTitle, label, changeStatus, task} = props
  const [inputValue, setInputValue] = useState<string>(itemTitle)
  const [editMode, setEditMode] = useState<boolean>(false)

  const onEditModeHandler = (): void => setEditMode(true)
  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }, [])

  const onViewMode = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newTitle = e.currentTarget.value

      if (callback) {
        callback(newTitle, itemId)
      }
      setEditMode(false)
    },
    [callback, itemId]
  )
  return (
    <Tooltip placement={'top-start'} title={'double-click to edit'}>
      <div>
        {!editMode
          ? <Typography
            onClick={()=>changeStatus(task)}
            onDoubleClick={onEditModeHandler}
            style={{userSelect: 'none'}}
            variant={"h6"}
          >
            {itemTitle}
          </Typography>
          : <Input
            autoFocus
            id={'standard-basic'}
            label={label}
            onBlur={onViewMode}
            onChange={onChangeHandler}
            type={'text'}
            value={inputValue}
            variant={'standard'}
          />
        }
      </div>
    </Tooltip>
  )
})
