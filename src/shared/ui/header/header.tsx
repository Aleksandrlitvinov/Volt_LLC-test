import {ReactNode} from 'react'
import s from './header.module.scss'

export const Header = (): ReactNode => {
  return (
    <header className={s.header}>
      <div className={'container'}>
        <p className={s.title}>Todo List</p>
      </div>
    </header>
  )
}