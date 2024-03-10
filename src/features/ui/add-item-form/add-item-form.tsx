import React, {ChangeEvent, ReactNode, useCallback, useState} from 'react'
import {Button, ThemeProvider} from '@mui/material'
import {Input} from '@/shared'
import {stylesAddItemForm, stylesBtnTask} from '@/styles'
import AddIcon from '@mui/icons-material/Add'
import {MAX_LENGTH_OF_TITLE} from '@/const'


type AddItemFormPropsType = {
  callback: (todoTitle: string, id?: string) => void
  className: string
  placeholder: string
}
export const AddItemForm = (props: AddItemFormPropsType): ReactNode => {
  const { callback, className, placeholder } = props
  const [inputValue, setInputValue] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const isValidLength = !inputValue.length || inputValue.length > MAX_LENGTH_OF_TITLE

  const onInputChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }, [])

  const onValueChangeHandler = useCallback((todoTitle: string) => {
    setError(false)
    setInputValue(todoTitle)
  }, [])
  const addItem = useCallback(
    (e: React.FormEvent<HTMLFormElement>, itemTitle: string) => {
      e.preventDefault()
      if (itemTitle.trim() === '') {
        setError(true)
      } else {
        callback(itemTitle)
      }
      setInputValue('')
    },
    [callback]
  )
  return (
    <form onSubmit={e => addItem(e, inputValue)}>
      <div className={className}>
        <div>
          <ThemeProvider theme={stylesAddItemForm}>
            <Input
              error={error}
              onChange={onInputChangeValue}
              onValueChange={onValueChangeHandler}
              placeholder={placeholder}
              type={'text'}
              value={inputValue}
            />
          </ThemeProvider>
          <div style={{color: '#cc1439', textAlign: 'center', paddingTop: '5px'}}>
            {
              isValidLength && <p>title must be less then {MAX_LENGTH_OF_TITLE} symbols</p>
            }
          </div>
        </div>
        <ThemeProvider theme={stylesBtnTask}>
          <Button disabled={isValidLength} type={'submit'} variant={'contained'}>
            <AddIcon />
          </Button>
        </ThemeProvider>
      </div>
    </form>
  )
}