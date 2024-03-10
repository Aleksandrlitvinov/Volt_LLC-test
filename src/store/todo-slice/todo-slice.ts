import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'

type InitialStateType = {
  todoTitle: string
  todoId: string
  tasksList: [] | TaskType[]
  filterTasks: FilterTasksType
}

const initialState: InitialStateType = {
  todoTitle: 'First todo',
  todoId: uuidv4(),
  tasksList: [],
  filterTasks: 'all'
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeTodoTitle: (state, action: PayloadAction<{ newTitle: string, todoId: string }>) => {
      state.todoTitle = action.payload.newTitle
    },
    createTaskForTodo: (state, action: PayloadAction<{ taskTitle: string, todoId: string }>) => {
      const newTask: TaskType = {
        taskTitle: action.payload.taskTitle,
        taskId: uuidv4(),
        isCompleted: false
      }
      state.tasksList = [newTask, ...state.tasksList]
    },
    updateTodoTask: (state, action: PayloadAction<TaskType>) => {
      state.tasksList = state.tasksList.map(task => task.taskId === action.payload?.taskId ? { ...action.payload } : task)
    },
    removeTodoTask: (state, action: PayloadAction<{id: string}>) => {
      state.tasksList = state.tasksList.filter(task => task.taskId !== action.payload.id)
    }
  }
})
export const {changeTodoTitle, createTaskForTodo, updateTodoTask, removeTodoTask} = todoSlice.actions
export default todoSlice.reducer

export type TaskType = {
  taskTitle: string
  taskId: string
  isCompleted: boolean
}
export type FilterTasksType = 'current' | 'all' | 'completed'