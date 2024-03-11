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

// - Display counter of completed and uncompleted tasks.
