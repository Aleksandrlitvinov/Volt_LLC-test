import { FilterTasksType } from '@/store'
import { stylesBtnFilter } from '@/styles'
import { Button, ButtonGroup, ThemeProvider } from '@mui/material'
import {ReactNode} from 'react'

const buttons = [{ title: 'all' }, { title: 'current' }, { title: 'completed' }]

type FilterPropsType = {
  className?: string
  filter: FilterTasksType
  onClickSetFilter: (value: string) => void
}

export const FilterTasks = (props: FilterPropsType): ReactNode => {
  const { className, filter, onClickSetFilter } = props

  return (
    <ButtonGroup
      aria-label={'Disabled button group'}
      className={className}
      style={{ display: 'flex', justifyContent: 'space-around' }}
      variant={'outlined'}
    >
      {buttons.map(b =>
        <ThemeProvider key={b.title} theme={stylesBtnFilter}>
          <Button
            className={filter === b.title ? 'active' : 'default'}
            key={b.title}
            onClick={() => onClickSetFilter(b.title)}
          >
            {b.title}
          </Button>
        </ThemeProvider>
      )}
    </ButtonGroup>
  )
}
