import {ChangeEvent, ComponentPropsWithoutRef, forwardRef} from 'react'

import {TextField} from '@mui/material'
import {TextFieldProps} from '@mui/material/TextField/TextField'
import clsx from 'clsx'

import s from './input.module.scss'

type InputPropsType = {
  errorInput: null | string
  label?: string
  onValueChange?: (value: string) => void
  type: 'text'
  value?: string
} & ComponentPropsWithoutRef<'input'>

type GenInputType = InputPropsType & TextFieldProps
export const Input = forwardRef<HTMLInputElement, GenInputType>((props, ref) => {
  const {error, errorInput, label, onValueChange, placeholder, type, value, ...rest} = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onValueChange) {
      onValueChange(e.target.value)
    }
  }

  const classNames = {
    input: clsx(s.input, error && s.error),
    inputWrapper: clsx(s.inputWrapper, error && s.error)
  }
  //todo error
  return (
    <div className={classNames.inputWrapper}>
      {label && <div className={s.label}>{label}</div>}
      <TextField
        className={classNames.input}
        error={error}
        onChange={onChangeHandler}
        placeholder={placeholder}
        ref={ref}
        type={type}
        value={value}
        {...rest}
      />
      {errorInput && <div className={s.errorMessage}>{errorInput}</div>}
    </div>
  )
})
