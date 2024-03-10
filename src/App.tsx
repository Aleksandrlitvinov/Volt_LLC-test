import {ReactNode} from 'react'
import {Header} from '@/shared'
import {Todo} from "@/features/ui/todo/todo.tsx"

const App = (): ReactNode => {

  return (
    <>
      <Header />
      <main className={'container'} style={{padding: '20px 0'}}>
        <Todo />
      </main>
    </>
  )
}

export default App


// - A new record is added if its length is less than or equal to N characters.

// - Switching the status of a record Completed / Not completed when clicking on its name.
// - Display counter of completed and uncompleted tasks.
